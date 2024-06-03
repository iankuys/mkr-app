import React, { useEffect, useState } from 'react';
import { Center, Grid, Image, Title } from '@mantine/core';
import { getUrlResult } from '@/src/helper';
import { productRawObject , productCard} from '@/src/types';
import { CardsCarousel } from '../Carousel/Carousel';
import { productObjects } from '@/src/data';
import { fetchURL } from '@/src/helper';

export default function ProductDescription({ object }: { object: productRawObject }) {

  const [productObject, setProductObject] = useState<any>();
  // useEffect(() => {
  //   const keys = productObjects.map(item => item.key);
  //   const fetchData = async (keys: any) => {
  //     try {
  //       const imageData = await fetchURL(keys);
  //       console.log(imageData);

  //       setProductObject(
  //         productObjects.reduce((acc: productCard[], item) => {
  //           const matchingItem = imageData.find(aboutItem => aboutItem.s3key === item.key);

  //           if (matchingItem) {
  //             let newAboutObject: productCard = {
  //               title: item.title,
  //               description: item.description,
  //               imageObject: {
  //                 url: matchingItem.url,
  //                 s3key: matchingItem.s3key
  //               }
  //             }
  //             return [...acc, newAboutObject];
  //           }
  //           return acc;
  //         }, [] as productCard[]));
  //     } catch (error) {
  //       console.error('Failed to fetch data:', error);
  //     }
  //   };

  //   fetchData(keys);
  // }, [])


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
          <Image
            radius="md"
            h={300}
            src={productObject}
          />
        </Grid.Col>
      </Grid>

    </>
  )
}
