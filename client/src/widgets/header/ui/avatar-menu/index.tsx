import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import { useLogout } from 'entities/session'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import { MdPerson } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'

export const AvatarWithMenu = () => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (event: SyntheticEvent | null, isOpen: boolean) => {
    setOpen(isOpen)
  }

  const { logout } = useLogout()

  const router = useRouter()

  const goToProfile = () => router.push('/profile')

  const handleLogout = () => {
    logout()
    router.push('/auth/sign-in')
  }

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
        <MenuItem color="danger" onClick={handleLogout}>
          <TbLogout />
          Logout
        </MenuItem>
      </Menu>
    </Dropdown>
  )
}
