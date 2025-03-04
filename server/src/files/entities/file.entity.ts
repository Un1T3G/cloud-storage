import { UserEntity } from '../../users/entities/user.entity'
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

export enum FileType {
  PHOTOS = 'photos',
  TRASH = 'trash',
}

@Entity({ name: 'files' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  filename: string

  @Column()
  originalName: string

  @Column()
  size: number

  @Column()
  mimetype: string

  @DeleteDateColumn()
  deleteAt?: Date

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity
}
