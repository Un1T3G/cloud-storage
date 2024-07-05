import { useFileStore, useFilesDelete } from 'entities/files'
import toast from 'react-hot-toast'
import { errorCatch } from 'shared/api'

interface IProps {
  ids: number[]
  onClick?: VoidFunction
}

export const useDeleteButton = ({ ids, onClick }: IProps) => {
  const deleteFiles = useFileStore((state) => state.deleteFiles)

  const { mutate } = useFilesDelete({
    onError: (error) => toast.error(errorCatch(error)),
    onSuccess: (_, ids) => {
      deleteFiles(ids)
      toast.success('Files successfully deleted')
    },
  })

  const handleDelete = () => {
    mutate(ids)
    if (onClick) onClick()
  }

  return {
    disabled: ids.length === 0,
    deleteFiles: handleDelete,
  }
}
