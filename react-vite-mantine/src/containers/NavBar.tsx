import { Navbar as MantineNavBar } from '@mantine/core'
import React from 'react'
import { useStore } from 'store'
import {
  AlertCircle,
  Database,
  GitPullRequest,
  Messages,
} from 'tabler-icons-react'
import { NavBarItem } from './NavBarItem'

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
]

export const NavBar: React.FC = () => {
  const sidebarOpen = useStore(state => state.sidebarOpen)
  return (
    <MantineNavBar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!sidebarOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <MantineNavBar.Section>
        {data.map(({ icon, color, label }) => (
          <NavBarItem icon={icon} color={color} label={label} />
        ))}
      </MantineNavBar.Section>
    </MantineNavBar>
  )
}
