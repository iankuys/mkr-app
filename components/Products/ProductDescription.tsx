import React, { useEffect, useState } from 'react';
import { Center, Grid, Image, Title } from '@mantine/core';
import { getUrlResult } from '@/src/helper';
import { productRawObject, productCard, carouselImageObject } from '@/src/types';
import { CardsCarousel } from '../Carousel/Carousel';
import { fetchURL } from '@/src/helper';

export default function ProductDescription({ object }: { object: productRawObject }) {

  const [productObject, setProductObject] = useState<any>();

  useEffect(() => {
    const keys = object.s3keys;
    const fetchData = async (keys: any) => {
      try {
        const imageData = await fetchURL(keys);
        console.log(imageData);

        setProductObject(imageData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData(keys);
  }, [])


  return (
    <>
      <Center h={100} bg="var(--mantine-color-gray-light)">
        <Title order={2}>
          {object.title}
        </Title>
      </Center>
      <Grid justify="center" align="center" py="1rem">
        <Grid.Col span={6}>
          {object.description}
        </Grid.Col>
        <Grid.Col span={6}>
          <CardsCarousel carouselCard={productObject}/>
        </Grid.Col>
      </Grid>

    </>
  )
}
