import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as express from 'express'
import { join } from 'path'

require('dotenv').config()

const PORT = process.env.SERVER_PORT || 7000

async function bootstrap() {
  const app = await await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  })

  app.setGlobalPrefix('api')

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

  const config = new DocumentBuilder()
    .setTitle('Cloud storage')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'Backend Generator',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  })

  await app.listen(PORT, () => console.log(`Server run in port ${PORT}`))
}

bootstrap()
