import { Stack, Title } from '@mantine/core'
import React from 'react'

export const ContentLayout: React.FC<{
  children: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <Stack>
      <Title m="0">{title}</Title>
      {children}
    </Stack>
  )
}
