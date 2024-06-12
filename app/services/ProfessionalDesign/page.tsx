"use client"

import React from 'react'
import ServiceDescription from '@/components/Services/ServiceDescription'
import { professionalDesign } from '@/src/data'

export default function page() {
  return (
    <div>
        <ServiceDescription object={professionalDesign} />
    </div>
  )
}
