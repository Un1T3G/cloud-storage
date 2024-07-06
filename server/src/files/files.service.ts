import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FileEntity, FileType } from './entities/file.entity'
import { Repository } from 'typeorm'

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly filesRepository: Repository<FileEntity>
  ) {}
  create(file: Express.Multer.File, userId: number) {
    return this.filesRepository.save({
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      user: { id: userId },
    })
  }
  findAll(userId: number, fileType: FileType) {
    const qb = this.filesRepository.createQueryBuilder('file')
    qb.where('file.userId = :userId', { userId })
    if (fileType === FileType.PHOTOS) {
      qb.andWhere('file.mimetype ILIKE :type', { type: '%image%' })
    } else if (fileType === FileType.TRASH) {
      qb.withDeleted().andWhere('file.deleteAt IS NOT NULL')
    }
    return qb.getMany()
  }
  async remove(userId: number, ids: string) {
    const idsArray = ids.split(',')
    const qb = this.filesRepository.createQueryBuilder('file')
    qb.where('id IN (:...ids) AND userId = :userId', {
      ids: idsArray,
      userId,
    })
    return qb.softDelete().execute()
  }
}
