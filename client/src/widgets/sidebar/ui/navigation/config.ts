import { FaTrashCan } from 'react-icons/fa6'
import { MdInsertPhoto, MdDashboard } from 'react-icons/md'

export const NavigationConfig = [
  {
    title: 'All files',
    path: '/',
    icon: MdDashboard,
  },
  {
    title: 'Photos',
    path: '/photos',
    icon: MdInsertPhoto,
  },
  {
    title: 'Trash',
    path: '/trash',
    icon: FaTrashCan,
  },
]
