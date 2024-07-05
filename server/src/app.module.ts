import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './users/entities/user.entity'
import { FilesModule } from './files/files.module'
import { FileEntity } from './files/entities/file.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      entities: [UserEntity, FileEntity],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    AuthModule,
    FilesModule,
  ],
})
export class AppModule {}
