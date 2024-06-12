"use client"

import React from 'react';
import { Stack, Grid, Image, Title, Text, BackgroundImage, Overlay, Center } from '@mantine/core';
import classes from './aboutPage.module.css';
import { aboutObject } from '@/src/types';
import { useState, useEffect } from 'react';
import { aboutPageData } from '@/src/data';
import { fetchURL } from '@/src/helper';

export default function page() {
  const [aboutObjects, setAboutObjects] = useState<aboutObject[]>([])

  useEffect(() => {
    const keys = aboutPageData.map(item => item.key);
    const fetchData = async (keys: any) => {
      try {
        const imageData = await fetchURL(keys);
        console.log(imageData);

        setAboutObjects(
          aboutPageData.reduce((acc: aboutObject[], item) => {
            const matchingItem = imageData.find(aboutItem => aboutItem.s3key === item.key);

            if (matchingItem) {
              let newAboutObject: aboutObject = {
                title: item.title,
                description: item.description,
                imageObject: {
                  url: matchingItem.url,
                  s3key: matchingItem.s3key
                }
              }
              return [...acc, newAboutObject];
            }
            return acc;
          }, [] as aboutObject[]));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData(keys);
  }, [])

  return (
    <>
      <Center h={120} bg="var(--mantine-color-gray-light)">
        <Title order={1} >About Us</Title>
      </Center>
      <div className={classes.background}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Grid className={classes.grid} px="5%" py="1rem" style={{ zIndex: 2 }}>
          <Grid.Col span={12}>
          </Grid.Col>
          {aboutObjects.map((item, index) => {

            console.log(index)
            return (
              <React.Fragment key={item.imageObject.s3key}>
                <Grid.Col span={6} style={{ order: (index + 1) % 2 === 0 ? 0 + index : 1 + index }}>
                  <Image
                    radius="md"
                    h={500}
                    src={item.imageObject.url}
                    style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.75)'}}
                  />
                </Grid.Col>
                <Grid.Col span={6} style={{ order: (index + 1) % 2 === 0 ? 1 + index : 0 + index }}>
                  <Stack
                    align="stretch"
                    justify='center'
                    gap="md"
                    style={{ height: '100%' }}
                  >
                    <Title className={classes.subtitle} order={1}>{item.title}</Title>
                    <Text className={classes.description} size="md">{item.description}</Text>
                  </Stack>
                </Grid.Col>
              </React.Fragment>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
