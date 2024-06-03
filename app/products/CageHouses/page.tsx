"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { Grid } from '@mantine/core';
import ContentCard from '@/components/Home/ContentCard';
import { carouselkeys, productsCardDescriptions } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <Grid>
                <Grid.Col span={12}>
                    {/* <ProductDescription object={} /> */}
                </Grid.Col>
            </Grid>
        </div>
    )
}
