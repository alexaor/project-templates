import { Navbar as MantineNavBar, Text } from '@mantine/core'
import { useStore } from 'store'

export const NavBar: React.FC = () => {
  const sidebarOpen = useStore(state => state.sidebarOpen)
  return (
    <MantineNavBar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!sidebarOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </MantineNavBar>
  )
}
