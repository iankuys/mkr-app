import React, { useEffect, useState } from 'react';
import { Center, Grid, List, Image, Stack, Title, Card, rem, Text } from '@mantine/core';
import { serviceRawObject } from '@/src/types';
import { CardsCarousel } from '../Carousel/Carousel';
import { fetchURL } from '@/src/helper';
import NextBreadcrumbs from '../BreadCrumbs/NextBreadcrumbs';

export default function ServiceDescription({ object }: { object: any }) {

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
            <Center h={120} bg="var(--mantine-color-gray-light)">
                <Title order={1}>
                    {object.title}
                </Title>
            </Center>
            <NextBreadcrumbs />
            <Grid justify="center" py="1rem" style={{ margin: rem(30), }}>
                <Grid.Col span={6}>
                    <Stack style={{ paddingLeft: '10%' }} >
                        {object.descriptionList.map((item:any) => (
                            <>
                                <Title order={4}>{item.title}</Title>
                                <Text>{item.description}</Text>
                            </>
                        ))}
                    </Stack>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Stack align='center' gap={30}>
                        {serviceImages?.map((item: { url: any; }, index: React.Key | null | undefined) =>
                            <Image
                                key={index}
                                radius="md"
                                src={item.url}
                                style={{ width: '70%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.75)' }}
                            />)}
                    </Stack>
                </Grid.Col>
            </Grid>

        </>
    )
}
