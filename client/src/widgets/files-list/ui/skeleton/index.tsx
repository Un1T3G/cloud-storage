import { CircularProgress, styled } from '@mui/joy'

export const FileListSkeleton = () => {
  return (
    <Root>
      <CircularProgress size="md" />
    </Root>
  )
}

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  minHeight: '100%',
}))
