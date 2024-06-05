"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { cageHouses } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <ProductDescription object={cageHouses} />
        </div>
    )
}
