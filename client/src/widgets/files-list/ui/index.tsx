import { FileType } from 'shared/api'
import { useFileList } from '../model'
import { FileListEmpty } from './empty-list'
import { FileListSkeleton } from './skeleton'
import { FileList } from './list'

interface IProps {
  type?: FileType
}

export const Files = ({ type }: IProps) => {
  const { isLoading, isEmpty } = useFileList(type)

  if (isEmpty) {
    return <FileListEmpty />
  }

  return isLoading ? <FileListSkeleton /> : <FileList />
}
