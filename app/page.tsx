"use client"

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Container, Grid, rem, useMantineColorScheme } from '@mantine/core';

import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { FooterLinks } from '@/components/Footer/FooterBar';
import ContentCard from '@/components/Home/ContentCard';
import { HeroContentLeft } from '@/components/Home/HeroContent';
import { CardsCarousel } from '@/components/Carousel/Carousel';
import { galleryObjects, productsCardDescriptions } from '@/src/data';

export default function HomePage() {
  return (
    <>
      {/* <Welcome />
    <ColorSchemeToggle /> */}
      <div className="container mx-auto min-w-full">
        <Grid>
          <Grid.Col span={12}>
            <HeroContentLeft keyValue="MKR-Gallery/houses.jpg" />
          </Grid.Col>
        </Grid>
        {/* <Grid justify="center" gutter="xs" style={{ marginTop: "1%", marginBottom: "1%"  }}>
          {productsCardDescriptions.map((card) => {
            return (
              <Grid.Col key={card.title} span={{ sm: 4, xl: 2.5 }}>
                <ContentCard {...card} />
              </Grid.Col>
            );
          })
          }
        </Grid> */}
        {/* <Grid>
          <Grid.Col span={12}>
            <CardsCarousel objects={carouselkeys} />
          </Grid.Col>
        </Grid> */}
      </div>
    </>
  );
}
