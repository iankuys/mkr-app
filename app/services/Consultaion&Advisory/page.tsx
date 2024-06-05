"use client"

import React from 'react'
import ServiceDescription from '@/components/Services/ServiceDescription';
import { consultationAdvisory } from '@/src/data';

export default function page() {
    return (
        <div className="container mx-auto min-w-full">
            <ServiceDescription object={consultationAdvisory} />
        </div>
    )
}
