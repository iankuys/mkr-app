import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import { useState, useEffect } from 'react';
import { getUrlResult } from '../../src/helper';
import { CardProps, keyObject, imageGalleryObject, carouselImageObject } from '../../src/types';


function Card({ url, title }: CardProps) {

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="sm"
            style={{ backgroundImage: `url(${url})` }}
            className={classes.card}
            withBorder
        >
            <div>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
        </Paper>
    );
}

export function CardsCarousel({ carouselCard }: { carouselCard: carouselImageObject[] }) {

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = carouselCard.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize={{ base: '100%', sm: '50%', xl: '33%' }}
            slideGap={{ base: 'xs', sm: 'xl', xl: 'sm' }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            controlsOffset="md"
            controlSize={30}
            mx={{}}
            style={{ marginBottom: rem(50) }}
            loop
        >
            {slides}
        </Carousel>
    );
}