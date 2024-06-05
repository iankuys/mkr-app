import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Modal, Image, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import { useState } from 'react';
import { CardProps, carouselImageObject } from '../../src/types';


function Card({ url }: CardProps) {

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="sm"
            style={{ backgroundImage: `url(${url})` }}
            className={classes.card}
            withBorder
        >
        </Paper>
    );
}

export function CardsCarousel({ carouselCard }: { carouselCard: carouselImageObject[] }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [modalOpened, setModalOpened] = useState(false);
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = carouselCard?.map((item, index) => (
        <Carousel.Slide key={index} onClick={() => { setSelectedImage(item.url); setModalOpened(true); }}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Carousel
                slideGap={{ base: 'xs', sm: 'xl', xl: 'sm' }}
                align="start"
                slidesToScroll={mobile ? 1 : 1}
                controlsOffset="md"
                controlSize={30}
                mx={{}}
                style={{ marginBottom: rem(50) }}
                loop
            >
                {slides}
            </Carousel>

            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} size="xl" withCloseButton={false} centered>
                <Image src={selectedImage} alt="Selected" style={{ width: '100%' }} />
            </Modal>
        </>
    );
}