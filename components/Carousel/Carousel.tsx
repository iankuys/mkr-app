import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Modal, Center, Image, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import { useState } from 'react';
import { CardProps, carouselImageObject } from '../../src/types';


function Card({ url }: CardProps) {

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
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
        <Center>
            <Carousel
                slideGap={{ base: 'xs', sm: 'xl', xl: 'sm' }}
                align="start"
                slidesToScroll={mobile ? 1 : 1}
                controlsOffset="md"
                controlSize={30}
                style={{ border: 0, width: '70%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.75)' }}
                loop
            >
                {slides}
            </Carousel>

            <Modal opened={modalOpened} onClose={() => setModalOpened(false)} size="xl" withCloseButton={false} centered>
                <Image src={selectedImage} alt="Selected" style={{ width: '100%' }} />
            </Modal>
        </Center>
    );
}