"use client"

import React from 'react';
import { Center, Box, Grid, Image, Title, Overlay } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { keyObject, imageGalleryObject } from '@/src/types';
import { getUrlResult } from '@/src/helper';
import { carouselkeys } from '@/src/data';
import ImageCards from '@/components/Gallery/ImageCards';

export default function page() {

  const { hovered, ref } = useHover();
  const [imageObjects, setImageObjects] = useState<imageGalleryObject[]>([]);
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
    const newImageObjects: imageGalleryObject[] = [];

    await Promise.all(
      carouselkeys.map(async (object) => {
        try {
          const response = await getUrlResult(object.s3key);

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
      <Center h={120} bg="var(--mantine-color-gray-light)">
        <Box><Title order={1}>MKR Gallery</Title></Box>
      </Center>
      <ImageCards />
    </>
  )
}
