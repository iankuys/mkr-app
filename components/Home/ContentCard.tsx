'use client'

import React from 'react'
import { Card, Button, Image, Text, Stack, Center } from '@mantine/core';
import { em, rem } from '@mantine/core';

export default function ContentCard({icon, title, description }: { icon: JSX.Element, title: string, description: string }) {
  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      target="_blank"
      style={{ minHeight: rem(300), justifyContent: "center", alignItems: "center" }}
    >
      <Card.Section>
      </Card.Section>
      <Stack align='center'>
        {icon}
        <Text size="lg" mt="md">
          {title}
        </Text>
        <Text mt="xs" color="dimmed" size="sm">
          {description}
        </Text>
          <Button color="dark">
              Read more
          </Button>
      </Stack>
    </Card>
  );
}
