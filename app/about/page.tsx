"use client"

import React from 'react';
import { HeaderMenu } from '@/components/Home/HeaderMenu';
import { FooterLinks } from '@/components/Home/FooterBar';
import { Stack, Grid, Image, Title, Text  } from '@mantine/core';

export default function page() {
  return (
    <>
=        <div>
            <Grid px="20rem" py="1rem">
              <Grid.Col span={6}>
                <Image
                  radius="md"
                  h={500}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
                />
                
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack 
                  align="stretch"
                  justify='center'
                  gap="md"
                  style={{ height: '100%' }}
                  >
                  <Title order={1}>This is h1 title</Title>
                  <Text size="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum et ex a ultricies. Nunc at accumsan est. Suspendisse potenti. Donec egestas mauris vitae est ultricies, quis ultricies sapien vehicula. Nunc a mauris ut libero suscipit euismod sit amet quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nunc vitae massa lacinia, id maximus nisi tincidunt. Cras massa neque, lacinia eu nulla non, rhoncus condimentum mauris. Nunc lobortis lobortis fermentum. Nulla porta, massa non placerat pulvinar, massa risus feugiat massa, vel congue neque dolor nec lectus. Mauris vestibulum nisi magna, eget rhoncus orci laoreet quis. Nam semper ipsum mi, vel gravida turpis euismod in.</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack 
                  align="stretch"
                  justify='center'
                  gap="md"
                  style={{ height: '100%' }}
                  >
                  <Title order={1}>This is h2 title</Title>
                  <Text size="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum et ex a ultricies. Nunc at accumsan est. Suspendisse potenti. Donec egestas mauris vitae est ultricies, quis ultricies sapien vehicula. Nunc a mauris ut libero suscipit euismod sit amet quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere nunc vitae massa lacinia, id maximus nisi tincidunt. Cras massa neque, lacinia eu nulla non, rhoncus condimentum mauris. Nunc lobortis lobortis fermentum. Nulla porta, massa non placerat pulvinar, massa risus feugiat massa, vel congue neque dolor nec lectus. Mauris vestibulum nisi magna, eget rhoncus orci laoreet quis. Nam semper ipsum mi, vel gravida turpis euismod in.</Text>
                </Stack>
                
              </Grid.Col>
              <Grid.Col span={6}>
                <Image
                  radius="md"
                  h={500}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                />
              </Grid.Col>
            </Grid>     
          </div>
    </>
  )
}
