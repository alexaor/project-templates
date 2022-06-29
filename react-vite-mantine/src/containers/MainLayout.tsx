import { AppShell, Text, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const MainLayout: React.FC<{}> = ({}) => {
  const [count, setCount] = useState(0)

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
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  )
}
