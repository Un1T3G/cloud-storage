import { fetchWithAuth } from '../api.config'
import { FileType, IFile } from './files.types'

export const getFiles = (query?: FileType) => {
  return fetchWithAuth.get<IFile[]>('files', {
    params: {
      type: query,
    },
  })
}

export const uploadFile = (file: File) => {
  const formData = new FormData()

  formData.append('file', file)

  return fetchWithAuth.post('files/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const deleteFiles = (ids: number[]) => {
  return fetchWithAuth.delete('files', {
    params: {
      ids: ids.join(','),
    },
  })
}
