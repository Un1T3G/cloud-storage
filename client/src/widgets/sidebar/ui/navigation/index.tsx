import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
  styled,
} from '@mui/joy'
import { NavigationConfig } from './config'

import { useRouter } from 'next/router'

export const Navigation = () => {
  const router = useRouter()

  return (
    <Root size="sm">
      {NavigationConfig.map(({ title, path, icon: Icon }) => (
        <ListItem key={path}>
          <ListItemButton
            onClick={() => {
              router.push(path)
            }}
            selected={router.pathname === path}
          >
            <Icon size={16} />
            <ListItemContent>
              <Typography level="title-md">{title}</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      ))}
    </Root>
  )
}

const Root = styled(List)(({ theme }) => ({
  padding: theme.spacing(2),
  gap: 1,
  '--List-nestedInsetStart': '30px',
  '--ListItem-radius': theme.vars.radius.sm,
}))
