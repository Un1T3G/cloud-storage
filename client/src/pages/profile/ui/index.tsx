import { Box, Card, styled } from '@mui/joy'
import { useUser } from 'entities/session'
import { UserUpdateForm } from 'features/user'
import { Layout } from 'pages/layout'
import { formatDate } from 'shared/lib'
import { NextPageWithLayout } from 'shared/types'

export const ProfilePage: NextPageWithLayout = () => {
  const user = useUser()

  return (
    <Root>
      <Box>
        <Title>{`Hi ${user?.username}`}</Title>
        <_Card>
          <UserUpdateForm />
        </_Card>
      </Box>
      {user?.createdAt && (
        <CreatedTime>
          <Box sx={{ opacity: 0.75, mr: 0.5 }}>User created at</Box>{' '}
          {formatDate(user.createdAt)}
        </CreatedTime>
      )}
    </Root>
  )
}

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100%',
  padding: theme.spacing(2),
}))

const _Card = styled(Card)({
  maxWidth: '320px',
  width: '100%',
})

const Title = styled('h2')(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}))

const CreatedTime = styled('span')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: theme.typography['body-lg'].fontSize,
  color: theme.palette.text.secondary,
}))

ProfilePage.getLayout = (page) => <Layout title="Profile">{page}</Layout>
