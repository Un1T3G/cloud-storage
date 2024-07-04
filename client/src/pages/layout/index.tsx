import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import { styled } from '@mui/joy'
import { Sidebar } from 'widgets/sidebar'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { NextSeo } from 'next-seo'

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] })

interface IProps extends PropsWithChildren {
  title: string
}

export const Layout = ({ title, children }: IProps) => {
  return (
    <>
      <NextSeo title={title} />
      <Root className={font.className}>
        <Sidebar />
        <Container>
          <Header title={title} />
          <Content>{children}</Content>
          <Footer />
        </Container>
      </Root>
    </>
  )
}

const Root = styled('div')({
  display: 'flex',
  minHeight: '100vh',
})

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

const Content = styled('main')({
  flex: 1,
  width: '100%',
})
