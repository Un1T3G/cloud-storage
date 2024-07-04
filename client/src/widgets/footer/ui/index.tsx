import { Box, Link, styled } from '@mui/joy'
import { FOOTER_HEIGHT } from '../constants'
import { FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Root>
      2024 © With
      <Box
        sx={{ color: (theme) => `rgb(${theme.palette.danger.mainChannel})` }}
        mx={0.5}
      >
        <FaHeart color="inherit" />
      </Box>
      from
      <Link target="_blank" href="https://github.com/un1t3g" sx={{ ml: 0.5 }}>
        Un1T3G
      </Link>
    </Root>
  )
}

const Root = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: FOOTER_HEIGHT,
  borderTop: `1px solid ${theme.palette.divider}`,
}))
