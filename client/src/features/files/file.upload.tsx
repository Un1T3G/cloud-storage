import { Button, styled } from '@mui/joy'
import { useFileUploadMutation, useFilesStore } from 'entities/files'
import { ChangeEvent } from 'react'
import toast from 'react-hot-toast'
import { FaFileUpload } from 'react-icons/fa'
import { errorCatch } from 'shared/api/api.lib'

export const FileUploadButton = () => {
  const addFile = useFilesStore((state) => state.addFile)

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

  return (
    <Button
      component="label"
      startDecorator={<FaFileUpload />}
      sx={{ width: '100%' }}
    >
      Upload file
      <VisuallyHiddenInput
        onChange={handleChange}
        type="file"
        multiple={false}
      />
    </Button>
  )
}

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`
