import { PropsWithChildren, useState } from 'react'
import { Inter } from 'next/font/google'
import { styled } from '@mui/joy'
import { SIDEBAR_WIDTH, Sidebar } from 'widgets/sidebar'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { NextSeo } from 'next-seo'
import { useIsMobile } from 'shared/lib'

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] })

interface IProps extends PropsWithChildren {
  title: string
}

export const Layout = ({ title, children }: IProps) => {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useIsMobile()

  const toggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <NextSeo title={title} />
      <Root className={font.className}>
        <ContentWrapper
          style={
            isMobile
              ? {
                  transform: `translateX(-${expanded ? SIDEBAR_WIDTH : 0}px)`,
                }
              : {}
          }
        >
          <Sidebar isMobile={isMobile} toggleExpanded={toggle} />
          <Container>
            <Header title={title} />
            <Content>{children}</Content>
            <Footer />
          </Container>
        </ContentWrapper>
      </Root>
    </>
  )
}

const Root = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflowX: 'hidden',
})

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    transition: 'transform 0.3s ease',
  },
}))

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    flex: '100vw 0 0',
  },
}))

const Content = styled('main')({
  flex: 1,
  width: '100%',
})
