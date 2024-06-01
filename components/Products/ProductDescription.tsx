import React, { useEffect, useState } from 'react';
import { Center, Grid, Image, Title } from '@mantine/core';
import { getUrlResult } from '@/src/helper';
import { productDescription } from '@/src/types';

export default function ProductDescription({ object }: { object: productDescription }) {

  const [imageLink, setImageLink] = useState<any>();

  async function fetchImageLink() {
    if (object !== undefined) {
      try {
        console.log(object.key)
        const response = await getUrlResult(object.key);
        console.log(response)

        if (response) {
          setImageLink(response);
        } else {
          console.error("Error fetching from S3");
        }
      } catch (error) {
        console.error(error);
      }

    }
  }

  useEffect(() => {
    fetchImageLink();
  })

  return (
    <>
      <Center h={100} bg="var(--mantine-color-gray-light)">
        <Title order={2}>
          {object.title}
        </Title>
      </Center>
      <Grid justify="center" align="center" px="20rem" py="1rem">
        <Grid.Col span={6}>
          {object.description}
        </Grid.Col>
        <Grid.Col span={6}>
          <Image
            radius="md"
            h={300}
            src={imageLink}
          />
        </Grid.Col>
      </Grid>

    </>
  )
}
