import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  Query,
  Delete,
} from '@nestjs/common'
import { FilesService } from './files.service'

import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'
import { fileStorage } from './storage'
import { User } from '../users/decorators/user.decorator'
import { Auth } from '../auth/decorators/auth.decorator'
import { FileType } from './entities/file.entity'

@ApiTags('files')
@ApiBearerAuth()
@Auth()
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: fileStorage,
    })
  )
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })],
      })
    )
    file: Express.Multer.File,
    @User('id') userId: number
  ) {
    return this.filesService.create(file, userId)
  }

  @Get()
  findAll(@User('id') userId: number, @Query('type') fileType: FileType) {
    return this.filesService.findAll(userId, fileType)
  }

  @Delete()
  remove(@User('id') userId: number, @Query('ids') ids: string) {
    return this.filesService.remove(userId, ids)
  }
}
