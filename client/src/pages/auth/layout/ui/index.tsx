import { Card, Tab, TabList, TabPanel, Tabs, styled } from '@mui/joy'
import { Logo } from './logo'
import { PropsWithChildren } from 'react'
import { useAuthTabs } from '../model'
import { AuthLayoutTabs } from '../config'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

interface IProps extends PropsWithChildren {
  title: string
}

const defaultValue = AuthLayoutTabs[0].path

export const AuthLayout = ({ title, children }: IProps) => {
  const { tab, onChange } = useAuthTabs(defaultValue, AuthLayoutTabs)

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
