import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy'
import { PropsWithChildren } from 'react'

const theme = extendTheme({
  colorSchemes: {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <CssVarsProvider
      defaultMode="system"
      theme={theme}
      modeStorageKey="theme-mode"
      disableNestedContext
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}
