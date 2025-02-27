import { Box, CircularProgress, Typography, styled } from '@mui/joy'
import { useFilesStore, useGetFiles } from 'entities/files'
import { useEffect } from 'react'
import { ImFileEmpty } from 'react-icons/im'
import { FileType } from 'shared/api'
import { Files } from './files'

interface IProps {
  type?: FileType
}

export const FilesGrid = ({ type }: IProps) => {
  const { data, isLoading, isSuccess } = useGetFiles(type)
  const setFiles = useFilesStore((state) => state.setFiles)

  useEffect(() => {
    if (isSuccess) {
      setFiles(data)
    }
  }, [data, isSuccess])

  if (data.length === 0) {
    return (
      <EmptyBlock>
        <Box textAlign="center">
          <Icon />
          <Typography>Empty List</Typography>
        </Box>
      </EmptyBlock>
    )
  }

  if (isLoading) {
    return (
      <LoadingBlock>
        <CircularProgress size="md" />
      </LoadingBlock>
    )
  }

  return <Files />
}

const LoadingBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  minHeight: '100%',
}))

const EmptyBlock = styled('div')(({ theme }) => ({
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
