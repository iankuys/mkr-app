'use client'

import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { getUrlResult } from '../../src/helper';
import { useEffect, useState } from 'react';

export function HeroContentLeft({keyValue} : {keyValue : string}) {

  const [backgroundUrl, setBackgroundUrl] = useState();

  useEffect(()=> {
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
    <div className={`${classes.hero}`} style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "none"}}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`${classes.container} p-20`} size="xl">
        <Title className={classes.title}>A fully featured React components library</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}