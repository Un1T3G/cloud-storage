import { Button } from '@mui/joy'
import { useFilesDelete, useFilesStore } from 'entities/files'
import toast from 'react-hot-toast'
import { FaTrashCan } from 'react-icons/fa6'
import { errorCatch } from 'shared/api/api.lib'

interface IProps {
  ids: number[]
  onClick?: VoidFunction
}

export const FileDeleteButton = ({ ids, onClick }: IProps) => {
  const deleteFiles = useFilesStore((state) => state.deleteFiles)

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

  return (
    <Button
      disabled={ids.length === 0}
      color="danger"
      variant="soft"
      startDecorator={<FaTrashCan />}
      onClick={handleDelete}
    >
      Delete files
    </Button>
  )
}
