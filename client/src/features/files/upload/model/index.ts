import { useFileStore, useFileUploadMutation } from 'entities/files/'

import { ChangeEvent } from 'react'
import toast from 'react-hot-toast'
import { errorCatch } from 'shared/api'

export const useUploadButton = () => {
  const addFile = useFileStore((state) => state.addFile)

  const { mutate } = useFileUploadMutation({
    onSuccess: ({ data }) => {
      addFile(data)
      toast.success('File uploaded successfully')
    },
    onError: (error) => {
      toast.error(errorCatch(error))
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    mutate(file)
  }

  return {
    handleChange,
  }
}
