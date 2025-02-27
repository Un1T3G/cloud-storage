import { Typography, styled } from '@mui/joy'
import { HEADER_HEIGHT } from 'widgets/header'

export const Logo = () => {
  return (
    <Root>
      <Typography level="h2">Cloud Storage</Typography>
    </Root>
  )
}

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: HEADER_HEIGHT,
})
