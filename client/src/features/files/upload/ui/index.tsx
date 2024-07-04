import { Button, styled } from '@mui/joy'
import { FaFileUpload } from 'react-icons/fa'

export const UploadButton = () => {
  return <Root startDecorator={<FaFileUpload />}>Upload file</Root>
}

const Root = styled(Button)({
  width: '100%',
})
