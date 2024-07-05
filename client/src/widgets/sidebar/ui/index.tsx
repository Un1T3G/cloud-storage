import { Stack, styled } from '@mui/joy'
import { SIDEBAR_WIDTH } from '../constants'
import { Logo } from './logo'
import { Navigation } from './navigation'
import { FOOTER_HEIGHT } from 'widgets/footer'
import { UploadButton } from 'features/files'
import { ToggleButton } from './toggle-button'

interface IProps {
  isMobile: boolean
  toggleExpanded: VoidFunction
}

export const Sidebar = ({ isMobile, toggleExpanded }: IProps) => {
  return (
    <Root>
      <Logo />
      <Stack flex={1} justifyContent="space-between">
        <Navigation />
        <ButtonContainer>
          <UploadButton />
        </ButtonContainer>
      </Stack>
      {isMobile && <ToggleButton toggleExpanded={toggleExpanded} />}
    </Root>
  )
}

const Root = styled('aside')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: SIDEBAR_WIDTH,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    flex: `${SIDEBAR_WIDTH}px 0 0`,
  },
}))

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'stretch',
  padding: theme.spacing(2),
  height: FOOTER_HEIGHT,
}))
