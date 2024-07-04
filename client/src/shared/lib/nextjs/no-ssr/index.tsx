import dynamic from 'next/dynamic'

export const NoSSR = dynamic(() => import('./content'), {
  ssr: false,
})
