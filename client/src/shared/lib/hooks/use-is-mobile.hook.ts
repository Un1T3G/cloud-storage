import { useTheme } from '@mui/joy'
import { useMediaQuery } from './use-media-query.hook'

export const useIsMobile = () => {
  const theme = useTheme()

  return useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`)
}
