import React, { useEffect, useState } from 'react';
import { Center, Grid, List, Image, Stack, Title } from '@mantine/core';
import { serviceRawObject } from '@/src/types';
import { CardsCarousel } from '../Carousel/Carousel';
import { fetchURL } from '@/src/helper';

export default function ServiceDescription({ object }: { object: serviceRawObject }) {

    const [serviceImages, setServiceImages] = useState<any>();

    useEffect(() => {
        const keys = object.s3keys;
        const fetchData = async (keys: any) => {
            try {
                const imageData = await fetchURL(keys);
                console.log(imageData);

                setServiceImages(imageData);
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
                    <List size="xl">
                        {object.descriptionList.map((item, index) => <List.Item key={index}>{item}</List.Item>)}
                    </List>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Stack>
                        {serviceImages?.map((item: { url: any; }, index: React.Key | null | undefined) =>
                            <Image
                                key={index}
                                radius="md"
                                src={item.url}
                                h={10}
                            />)}
                    </Stack>
                </Grid.Col>
            </Grid>

        </>
    )
}
