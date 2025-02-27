import { Box, Stack, Typography, styled } from '@mui/joy'

export const Logo = () => {
  return (
    <Root>
      <Typography level="h4">Cloud Storage</Typography>
      <Stack flexDirection="row" columnGap={0.5}>
        <Box sx={{ opacity: 0.75 }}>By</Box>
        <b>Un1T3G</b>
      </Stack>
    </Root>
  )
}

const Root = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  padding: theme.spacing(2),
}))
