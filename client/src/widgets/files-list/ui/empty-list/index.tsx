import { Box, Typography, styled } from '@mui/joy'

import { ImFileEmpty } from 'react-icons/im'

export const FileListEmpty = () => {
  return (
    <Root>
      <Box textAlign="center">
        <Icon />
        <Typography>Empty List</Typography>
      </Box>
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

const Icon = styled(ImFileEmpty)(({ theme }) => ({
  color: theme.palette.text.icon,
  fontSize: 64,
}))
