import { IFile } from 'shared/api/types'

type State = {
  files: IFile[]
}

type Actions = {
  addFile: (file: IFile) => void
  setFiles: (files: IFile[]) => void
  deleteFiles: (ids: number[]) => void
}

export type FilesState = State & Actions
