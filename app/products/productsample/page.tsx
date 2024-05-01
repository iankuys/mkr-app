"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { Grid } from '@mantine/core';

export default function page() {
  return (
    <Grid>
        <ProductDescription title="hello" description="LOLOL" key="HEY"/>
    </Grid>
  )
}
