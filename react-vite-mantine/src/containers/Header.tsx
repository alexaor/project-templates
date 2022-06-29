import { Burger, Header as MantineHeader, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import { useStore } from 'store'

export const Header: React.FC = () => {
  const theme = useMantineTheme()
  const sidebarOpen = useStore((state) => state.sidebarOpen)
  const toggleSidebarOpen = useStore(state => state.toggleSidebarOpen)

  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={sidebarOpen}
            onClick={toggleSidebarOpen}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text>Application header</Text>
      </div>
    </MantineHeader>
  )
}
