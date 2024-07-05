import { styled } from '@mui/joy'
import { getExtensionFromFilename, isImage, sliceText } from '../../lib'
import { IFile } from 'shared/api'
import { FaFileAlt } from 'react-icons/fa'

interface IProps {
  file: IFile
}

const maxTextLength = 20

export const FileCard = ({ file }: IProps) => {
  const ext = getExtensionFromFilename(file.filename)

  const isImageExt = isImage(ext)

  return (
    <Root>
      <Container>
        <Extension>{ext}</Extension>
        {isImageExt ? (
          <_Image src={`${process.env.SERVER_URL}/uploads/${file.filename}`} />
        ) : (
          <FaFileAlt size={80} />
        )}
      </Container>
      <span>
        {sliceText(file.originalName, maxTextLength)}
        {file.originalName.length > maxTextLength ? '...' : ''}
      </span>
    </Root>
  )
}

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: 150,
  height: 150,
})

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: 100,
  height: 100,
  marginBottom: 5,
})

const Extension = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: 4,
  right: 4,
  textTransform: 'uppercase',
  fontSize: theme.typography['body-sm'].fontSize,
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  backdropFilter: 'blur(15px)',
  borderRadius: 4,
  padding: '2px 4px',
}))

const _Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 8,
})
