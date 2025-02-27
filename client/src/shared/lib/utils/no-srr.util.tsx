import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const NoSsr = (props: PropsWithChildren) => <>{props.children}</>

export const NoSSR = dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
