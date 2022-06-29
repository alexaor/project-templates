import { AppShell, Text, useMantineTheme } from '@mantine/core'
import { Dashboard } from 'modules/Dashboard'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const MainLayout: React.FC<{}> = ({}) => {
  const theme = useMantineTheme()
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<NavBar />}
      header={<Header />}
    >
      <Dashboard />
    </AppShell>
  )
}
