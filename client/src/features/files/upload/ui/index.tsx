import { Button, styled } from '@mui/joy'
import { FaFileUpload } from 'react-icons/fa'
import { useUploadButton } from '../model'

export const UploadButton = () => {
  const { handleChange } = useUploadButton()

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
