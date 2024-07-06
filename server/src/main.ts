import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as express from 'express'
import { join } from 'path'
import * as cors from 'cors'

require('dotenv').config()

const PORT = process.env.SERVER_PORT || 7000

async function bootstrap() {
  const app = await await NestFactory.create(AppModule)

  app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
  )
  app.setGlobalPrefix('api')

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

  const config = new DocumentBuilder()
    .setTitle('Cloud storage')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(PORT, () => console.log(`Server run in port ${PORT}`))
}

bootstrap()
