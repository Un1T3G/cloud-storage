import { IFile } from 'shared/api'

export interface FilesState {
  files: IFile[]
  addFile: (file: IFile) => void
  setFiles: (files: IFile[]) => void
  deleteFiles: (ids: number[]) => void
}
