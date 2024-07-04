import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'

export const useAuthTabs = (
  defaultValue: string,
  tabs: {
    path: string
  }[]
) => {
  const [tab, setTab] = useState(defaultValue)

  const router = useRouter()

  useLayoutEffect(() => {
    if (tabs.some((x) => x.path === router.pathname)) {
      setTab(router.pathname)
    }
  }, [router.pathname])

  const onChange = (newPath: string) => {
    router.push(newPath)
  }

  return { tab, onChange: onChange }
}
