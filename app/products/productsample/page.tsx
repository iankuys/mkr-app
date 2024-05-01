"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { Grid } from '@mantine/core';
import { productsPageDescriptionSample } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <Grid>
                <Grid.Col>
                    <ProductDescription object={productsPageDescriptionSample} />
                </Grid.Col>
            </Grid>
        </div>
    )
}
