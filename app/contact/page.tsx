"use client"

import React from 'react';
import { ContactUs } from '@/components/Contact/ContactUs';
import { HeaderMenu } from '@/components/Header/HeaderMenu';

export default function ContactPage() {
  return (
    <>
        <div className="container mx-auto min-w-full">
            <ContactUs />
        </div>
    </>
  )
}
