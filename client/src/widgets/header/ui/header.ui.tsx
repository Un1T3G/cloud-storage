import { IconButton, Stack, styled } from '@mui/joy'
import { useRouter } from 'next/router'
import { IoNotifications } from 'react-icons/io5'
import { HEADER_HEIGHT } from '../header.constants'

import { AvatarWithMenu } from './avatar-menu'

interface IProps {
  title: string
}

export const Header = ({ title }: IProps) => {
  const router = useRouter()

  const goToPermissionsPage = () => {
    router.push('/permissions')
  }

  return (
    <Root>
      <Title>{title}</Title>
      <Stack flexDirection="row" columnGap={1} alignItems="center">
        <IconButton onClick={goToPermissionsPage}>
          <IoNotifications />
        </IconButton>
        <AvatarWithMenu />
      </Stack>
    </Root>
  )
}

const Root = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: HEADER_HEIGHT,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: `0 ${theme.spacing(2)}`,
}))

const Title = styled('h1')(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: 'bold',
}))
