import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import { useAuthLogout } from 'features/auth'

import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import { MdPerson } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

export const AvatarWithMenu = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const logout = useAuthLogout()

  const handleOpenChange = (event: SyntheticEvent | null, isOpen: boolean) => {
    setOpen(isOpen)
  }

  const goToProfile = () => router.push('/profile')

  return (
    <Dropdown open={open} onOpenChange={handleOpenChange}>
      <MenuButton slots={{ root: Avatar }}>
        <MdPerson size="24" />
      </MenuButton>
      <Menu>
        <MenuItem onClick={goToProfile}>
          <MdPerson />
          Profile
        </MenuItem>
        <MenuItem color="danger" onClick={logout}>
          <TbLogout />
          Logout
        </MenuItem>
      </Menu>
    </Dropdown>
  )
}
