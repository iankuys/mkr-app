"use client"

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Container, Grid } from '@mantine/core';

import { HeaderMenu } from '@/components/Home/HeaderMenu';
import ContentCard from '@/components/Home/ContentCard';
import { FooterLinks } from '@/components/Home/FooterBar';
import { HeroContentLeft } from '@/components/Home/HeroContent';
import { CardsCarousel } from '@/components/Home/Carousel';
import { carouselkeys } from '@/components/data';

export default function HomePage() {
  return (
    <>
    {/* <Welcome />
    <ColorSchemeToggle /> */}
    <HeaderMenu />
      <div className="container mx-auto min-w-full">
        <Grid>
          <Grid.Col span={12}>
            <HeroContentLeft keyValue="MKR-Gallery/houses.jpg"/>
          </Grid.Col>
          <Grid.Col span={4}>
            <ContentCard text="test" description="LOL" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContentCard text="test" description="LOL" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ContentCard text="test" description="LOL" />
          </Grid.Col>
          <Grid.Col span={12}>
            <CardsCarousel objects={carouselkeys}/>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
