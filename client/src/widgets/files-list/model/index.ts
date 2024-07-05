import { useFileStore, useGetFiles } from 'entities/files'
import { useEffect } from 'react'
import { FileType } from 'shared/api'

export const useFileList = (type?: FileType) => {
  const { data, isLoading, isSuccess } = useGetFiles(type)

  const setFiles = useFileStore((state) => state.setFiles)

  useEffect(() => {
    if (isSuccess) {
      setFiles(data)
    }
  }, [data, isSuccess])

  return {
    files: data,
    isLoading,
    isEmpty: data.length === 0,
  }
}
