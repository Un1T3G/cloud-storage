import { useMutation, useQuery } from '@tanstack/react-query'
import { files } from 'shared/api'
import { FileType, IFile } from 'shared/api/types'
import { AxiosResponse } from 'axios'

const keys = {
  root: () => ['files'],
  files: () => [...keys.root(), 'getFiles'],
  upload: () => [...keys.root(), 'uploadFile'],
  delete: () => [...keys.root(), 'deleteFiles'],
}

export const useGetFiles = (fileType?: FileType) => {
  return useQuery({
    initialData: [],
    queryKey: keys.files(),
    queryFn: () => files.getFiles(fileType).then((data) => data.data),
  })
}

interface IFileMutationProps<T, K> {
  onSuccess?: (data: T, variables: K) => void
  onError?: (error: Error) => void
}

export const useFileUploadMutation = (
  props?: IFileMutationProps<AxiosResponse<IFile>, File>
) => {
  return useMutation<AxiosResponse<IFile>, Error, File>({
    mutationKey: keys.upload(),
    mutationFn: (file) => files.uploadFile(file),
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}

export const useFilesDelete = (props?: IFileMutationProps<void, number[]>) => {
  return useMutation<any, Error, number[]>({
    mutationKey: keys.delete(),
    mutationFn: (ids) => files.deleteFiles(ids),
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}
