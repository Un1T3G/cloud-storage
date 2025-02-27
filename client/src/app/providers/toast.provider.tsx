import { Alert } from '@mui/joy'
import { PropsWithChildren } from 'react'
import { Toaster, resolveValue } from 'react-hot-toast'
import { IoIosInformationCircle, IoMdDoneAll } from 'react-icons/io'
import { TiWarning } from 'react-icons/ti'

export const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster position="bottom-right">
        {(t) => {
          const Icon =
            t.type === 'error'
              ? TiWarning
              : t.type === 'success'
              ? IoMdDoneAll
              : IoIosInformationCircle

          return (
            <Alert
              color={
                t.type === 'error'
                  ? 'danger'
                  : t.type === 'success'
                  ? 'success'
                  : 'neutral'
              }
              style={{
                opacity: t.visible ? 1 : 0,
              }}
              sx={{
                transition: 'opacity 0.3s ease',
              }}
              startDecorator={<Icon size={20} />}
            >
              {resolveValue(t.message, t)}
            </Alert>
          )
        }}
      </Toaster>
    </>
  )
}
