import { Button, Text } from '@mantine/core'
import { useModals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { ContentLayout } from 'containers/ContentLayout'

export const Dashboard: React.FC<{}> = ({}) => {
  const modals = useModals()

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    })
  const handleShotNotification = () => {
    showNotification({
      title: 'Notification',
      message: 'Hey there, your code is awesome! 🤥',
    })
  }

  return (
    <ContentLayout title={'Kontrollpanel'}>
      <Button variant="outline" onClick={handleShotNotification}>
        Show notification
      </Button>
      <Button onClick={openConfirmModal}>Open confirm modal</Button>;
    </ContentLayout>
  )
}
