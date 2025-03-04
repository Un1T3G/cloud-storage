import { IconButton, styled } from '@mui/joy'
import { LuPanelLeftClose } from 'react-icons/lu'
import { FOOTER_HEIGHT } from 'widgets/footer'

interface IProps {
  toggleExpanded: VoidFunction
}

export const ToggleButton = ({ toggleExpanded }: IProps) => {
  return (
    <Root onClick={toggleExpanded} variant="soft">
      <LuPanelLeftClose />
    </Root>
  )
}

const Root = styled(IconButton)({
  position: 'absolute',
  bottom: FOOTER_HEIGHT + 16,
  right: 0,
  transform: 'translateX(100%)',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
})
