'use client';

import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconMoonFilled } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="transparent" style={{color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))'}} onClick={() => colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark')}>
      { (colorScheme === 'dark') ? <IconMoonFilled /> : <IconMoon />}
    </ActionIcon>
  );
}
