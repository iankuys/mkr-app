"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { Grid } from '@mantine/core';
import { productsPageDescriptionSample } from '@/src/data';
import ContentCard from '@/components/Home/ContentCard';
import { carouselkeys, productsCardDescriptions } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <Grid>
                <Grid.Col span={12}>
                    <ProductDescription object={productsPageDescriptionSample} />
                </Grid.Col>
                <Grid justify="center" gutter="xs" style={{ marginTop: "1%", marginBottom: "1%"  }}>
                {productsCardDescriptions.map((card) => {
                    return (
                    <Grid.Col key={card.title} span={{ sm: 4, xl: 2.5 }}>
                        <ContentCard {...card} />
                    </Grid.Col>
                    );
                })
                }
                </Grid>
            </Grid>
        </div>
    )
}
