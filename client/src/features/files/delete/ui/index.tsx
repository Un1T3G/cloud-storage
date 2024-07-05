import { Button } from '@mui/joy'
import { FaTrashCan } from 'react-icons/fa6'
import { useDeleteButton } from '../model'

interface IProps {
  ids: number[]
  onClick?: VoidFunction
}

export const DeleteButton = ({ ids, onClick }: IProps) => {
  const { deleteFiles, disabled } = useDeleteButton({ ids, onClick })

  return (
    <Button
      disabled={disabled}
      color="danger"
      variant="soft"
      startDecorator={<FaTrashCan />}
      onClick={deleteFiles}
    >
      Delete files
    </Button>
  )
}
