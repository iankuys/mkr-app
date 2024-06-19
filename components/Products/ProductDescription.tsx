import React, { useEffect, useState } from 'react';
import { Center, Grid, Card, Title, Text } from '@mantine/core';
import { productRawObject, productCard, carouselImageObject } from '@/src/types';
import { CardsCarousel } from '../Carousel/Carousel';
import { fetchURL } from '@/src/helper';
import { rem } from '@mantine/core';
import NextBreadcrumbs from '../BreadCrumbs/NextBreadcrumbs';

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
      <Center h={120} bg="var(--mantine-color-gray-light)">
        <Title order={1}>
          {object.title}
        </Title>
      </Center>
      <NextBreadcrumbs />
      <Grid justify="center" py="1rem" style={{ margin: rem(30), }}>
        <Grid.Col span={6}>
          <Center style={{ paddingLeft: '10%' }}>
            <Text>{object.description}</Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <CardsCarousel carouselCard={productObject} />
        </Grid.Col>
      </Grid>

    </>
  )
}
