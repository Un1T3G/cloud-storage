import { Stack, styled } from '@mui/joy'
import { SIDEBAR_WIDTH } from '../constants'
import { Logo } from './logo'
import { Navigation } from './navigation'
import { FOOTER_HEIGHT } from 'widgets/footer'
import { UploadButton } from 'features/files'

export const Sidebar = () => {
  return (
    <Root>
      <Logo />
      <Stack flex={1} justifyContent="space-between">
        <Navigation />
        <ButtonContainer>
          <UploadButton />
        </ButtonContainer>
      </Stack>
    </Root>
  )
}

const Root = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: SIDEBAR_WIDTH,
  borderRight: `1px solid ${theme.palette.divider}`,
}))

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'stretch',
  padding: theme.spacing(2),
  height: FOOTER_HEIGHT,
}))
