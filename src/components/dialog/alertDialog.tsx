import './styles.css'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as React from 'react'

interface AlertDialogProps {
  trigger: React.ReactNode
  description: React.ReactNode
  cancelText: string
  actionText: string
}

const CustomAlertDialog: React.FC<AlertDialogProps> = ({
  trigger,
  description,
  actionText,
  cancelText,
}) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <div role="button">{trigger}</div>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          {/* {description} */}
          <p className="text-xl font-bold mt-2 mb-5">Payment Request</p>
        </AlertDialog.Title>
        {/* <AlertDialog.Description className="AlertDialogDescription"> */}
        {description}
        {/* </AlertDialog.Description> */}
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className="Button red">{cancelText}</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button bg-cyan text-white">{actionText}</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)

export default CustomAlertDialog
