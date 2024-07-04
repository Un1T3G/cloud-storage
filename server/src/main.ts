import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

require('dotenv').config()

const PORT = process.env.SERVER_PORT || 7000

async function bootstrap() {
  const app = await await NestFactory.create(AppModule)

  app.enableCors({
    allowedHeaders: '*',
    credentials: true,
    origin: '*',
  })
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Cloud storage')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'JWT',
    })
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(PORT, () => console.log(`Server run in port ${PORT}`))
}

bootstrap()
