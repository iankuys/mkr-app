"use client"

import React from 'react';
import { Center, Box, Grid, Image, Title, Overlay } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { HeaderMenu } from '@/components/Home/HeaderMenu';
import { FooterLinks } from '@/components/Home/FooterBar';
import { useState, useEffect } from 'react';
import { keyObject, imageObject } from '@/components/types';
import { getUrlResult } from '@/components/helper';
import { carouselkeys } from '@/components/data';
import ImageCards from './test';

export default function page({ objects }: { objects: keyObject[] }) {

  const { hovered, ref } = useHover();
  const [imageObjects, setImageObjects] = useState<imageObject[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetchURL();
  }, [])

  useEffect(() => {
    setOverlayVisible();
  }, [hovered])

  function setOverlayVisible() {
    if (hovered) {
      setVisible(true);
      console.log('yup')
    } else {
      setVisible(false);
      console.log('nay')
    }
  }

  async function fetchURL() {
    const newImageObjects: imageObject[] = [];

    await Promise.all(
      carouselkeys.map(async (object) => {
        try {
          const response = await getUrlResult(object.key);

          if (response) {
            newImageObjects.push({
              url: response,
              title: object.title,
              link: object.link
            });
          } else {
            console.error("Error fetching from S3");
          }
        } catch (error) {
          console.error("Error getting URL");
        }

      })
    )
    console.log(newImageObjects)
    setImageObjects(newImageObjects);
  }
  return (
    <>
      <HeaderMenu />
      <Center h={100} bg="var(--mantine-color-gray-light)">
        <Box><Title order={3}>MKR Gallery</Title></Box>
      </Center>
      <ImageCards />
      <FooterLinks />
    </>
  )
}
