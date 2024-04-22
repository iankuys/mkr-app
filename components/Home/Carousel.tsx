import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import { useState, useEffect } from 'react';
import { getUrlResult } from '../helper';
import { CardProps, keyObject, imageObject } from '../types';


function Card({ url, title }: CardProps) {

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${url})` }}
            className={classes.card}
        >
            <div>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Read article
            </Button>
        </Paper>
    );
}

export function CardsCarousel({objects}: {objects: keyObject[]}) {
    const [image, setImages] = useState<imageObject[]>([])

    useEffect(() => {
        fetchURL(objects);
    }, [])

    async function fetchURL(objects: keyObject[]) {
        const newImageObjects: imageObject[] = [];

        await Promise.all(
            objects.map(async (object) => {
                try {
                    const response = await getUrlResult(object.key);
        
                    if (response.ok) {

                        newImageObjects.push({
                            url: response.url,
                            title: object.title
                        });
                    } else {
                        console.error("Error fetching from S3");
                    }
                } catch (error) {
                    console.error("Error getting URL");
                }
    
            })
        )

        setImages(newImageObjects);
    }
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = image.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{ base: '100%', sm: '50%', xl: '33%' }}
            slideGap={{ base: rem(2), sm: 'xl' }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}