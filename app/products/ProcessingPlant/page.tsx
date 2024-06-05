"use client"

import React from 'react'
import ProductDescription from '@/components/Products/ProductDescription';
import { processingPlant } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <ProductDescription object={processingPlant} />
        </div>
    )
}
