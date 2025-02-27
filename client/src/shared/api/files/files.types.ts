export interface IFile {
  id: number
  filename: string
  originalName: string
  size: string
  mimetype: string
  deletedAt?: string
}

export type FileType = 'photos' | 'trash'
