import { Box, Stack, styled } from '@mui/joy'
import { FileCard, useFileStore } from 'entities/files'
import { DeleteButton } from 'features/files'
import { useState } from 'react'
import Selecto from 'react-selecto'

const selectedClass = 'selected'

export const FileList = () => {
  const files = useFileStore((state) => state.files)

  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const clearSelectedIds = () => {
    setSelectedIds([])
  }

  return (
    <Root>
      <Stack sx={{ px: 2, pt: 2 }} alignItems="flex-start">
        <DeleteButton ids={selectedIds} onClick={clearSelectedIds} />
      </Stack>
      <Box flex={1}>
        <Grid flexDirection="row" flexWrap="wrap" columnGap={2} rowGap={2}>
          {files.map((file) => (
            <FileCardContainer key={file.id} data-id={file.id} className="file">
              <FileCard file={file} />
            </FileCardContainer>
          ))}
        </Grid>
        <Selecto
          selectableTargets={['.file']}
          selectByClick
          hitRate={10}
          selectFromInside
          toggleContinueSelect={['shift']}
          continueSelect={false}
          onSelect={(e) => {
            e.added.forEach((el) => {
              el.classList.add(selectedClass)
              setSelectedIds((prev) => [...prev, Number(el.dataset['id'])])
            })
            e.removed.forEach((el) => {
              el.classList.remove(selectedClass)
              setSelectedIds((prev) =>
                prev.filter((x) => x !== Number(el.dataset['id']))
              )
            })
          }}
        />
      </Box>
    </Root>
  )
}

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
})

const Grid = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  userSelect: 'none',
}))

const FileCardContainer = styled('div')(({ theme }) => ({
  border: '1px solid transparent',
  borderRadius: 8,
  '&.selected': {
    backgroundColor: theme.palette.primary.softBg,
    borderColor: theme.palette.primary.solidActiveBg,
  },
}))
