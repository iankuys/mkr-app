'use client'

import React from 'react'
import { Card, Image, Text } from '@mantine/core';
import { em, rem } from '@mantine/core';

export default function ContentCard({ text, description}: { text: string, description: string }) {
    return (
        <Card
          shadow="sm"
          p="xl"
          component="a"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              height={160}
              alt="No way!"
            />
          </Card.Section>
    
          <Text size="lg" mt="md">
            {text}
          </Text>
    
          <Text mt="xs" color="dimmed" size="sm">
            {description}
          </Text>
        </Card>
      );
}
