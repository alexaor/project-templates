import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { NotificationsProvider } from '@mantine/notifications'
import { MainLayout } from './MainLayout'

const theme = {
  // Override any other properties from default theme
  fontFamily: 'Open Sans, sans serif',
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
}

export const Root: React.FC<{}> = ({}) => {
  return (
    <MantineProvider theme={theme}>
      <NotificationsProvider>
        <ModalsProvider>
          <MainLayout />
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  )
}
