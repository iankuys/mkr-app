'use client'

import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { getUrlResult } from '../../src/helper';
import { useEffect, useState } from 'react';
import { heroContentDescription } from '../../src/data';

export function HeroContentLeft({ keyValue }: { keyValue: string }) {

  const [backgroundUrl, setBackgroundUrl] = useState();

  useEffect(() => {
    fetchURL(keyValue);
  }, [])

  async function fetchURL(keyValue: string) {
    try {
      console.log(keyValue)
      const response = await getUrlResult(keyValue);
      console.log(response)

      if (response) {
        setBackgroundUrl(response);
      } else {
        console.error("Error fetching from S3");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={`${classes.hero}`} style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "none" }}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`${classes.container}`} size="xl">
        <Title className={`${classes.title}`}>{heroContentDescription.title}</Title>
        <Title className={`${classes.subtitle}`} style={{ padding: '5px'}}>{heroContentDescription.subtitle}</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {heroContentDescription.description}
        </Text>
      </Container>
    </div>
  );
}