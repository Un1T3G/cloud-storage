import { Box, Button, Typography, styled } from '@mui/joy'
import { useUser } from 'entities/session'
import Link from 'next/link'
import { NextPageWithLayout } from 'shared/types'

export const NotFoundPage: NextPageWithLayout = () => {
  const user = useUser()

  return (
    <Root>
      <Box textAlign="center">
        <Typography level="h2" sx={{ fontWeight: 'bold' }}>
          404
        </Typography>
        {user ? (
          <Button href="/" component={Link}>
            Go to home
          </Button>
        ) : (
          <Button href="/auth/sign-in" component={Link}>
            Go to auth
          </Button>
        )}
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
