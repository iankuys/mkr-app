"use client"

import React from 'react';
import { ContactUs } from '@/components/Contact/ContactUs';
import { HeaderMenu } from '@/components/Home/HeaderMenu';
import { FooterLinks } from '@/components/Home/FooterBar';

export default function ContactPage() {
  return (
    <>
        <div className="container mx-auto min-w-full">
            <ContactUs />
        </div>
    </>
  )
}
