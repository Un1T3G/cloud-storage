import { Card, Tab, TabList, Tabs, styled } from '@mui/joy'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { PropsWithChildren, useLayoutEffect, useState } from 'react'
import { AuthLayoutTabs } from '../auth.layout.config'
import { Logo } from './logo'

interface IProps extends PropsWithChildren {
  title: string
}

const defaultValue = AuthLayoutTabs[0].path

export const AuthLayout = ({ title, children }: IProps) => {
  const [tab, setTab] = useState(defaultValue)

  const router = useRouter()

  useLayoutEffect(() => {
    if (AuthLayoutTabs.some((x) => x.path === router.pathname)) {
      setTab(router.pathname)
    }
  }, [router.pathname])

  const onChange = (newPath: string) => {
    router.push(newPath)
  }

  const handleOnChangeTab = (_: any, value: string | number | null) => {
    onChange(value as string)
  }

  return (
    <>
      <NextSeo title={title} />
      <Root>
        <div />
        <_Card>
          <_Tabs value={tab} onChange={handleOnChangeTab}>
            <TabList sx={{ justifyContent: 'center' }}>
              {AuthLayoutTabs.map((x) => (
                <Tab key={x.path} value={x.path}>
                  {x.title}
                </Tab>
              ))}
            </TabList>
          </_Tabs>
          {children}
        </_Card>
        <Logo />
      </Root>
    </>
  )
}

const Root = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const _Card = styled(Card)({
  maxWidth: '360px',
  width: '100%',
})

const _Tabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))
