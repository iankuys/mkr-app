import React from "react";
import { IconArrowLeft } from '@tabler/icons-react'

export interface CardProps {
    url: string;
    title: string;
}

export interface keyObject {
    s3key: string,
    title: string,
    link: string
    // Add any additional properties of the string object here
}

export interface aboutObject {
    title: string,
    description: string,
    imageObject: imageObject
}

export interface imageObject {
    url: string,
    s3key: string,
    // Add any additional properties of the string object here
}

export interface imageGalleryObject {
    url: string,
    title: string,
    link: string
    // Add any additional properties of the string object here
}


export interface productCard {
    title: string,
    description: string,
    icon: JSX.Element;
    // Add any additional properties of the string object here
}


export interface productRawObject {
    title: string,
    description: string,
    s3keys: string[]
    // Add any additional properties of the string object here
}

export interface productObject {
    title: string,
    description: string,
    url: string[]
}

export interface carouselImageObject {
    url: string,
    title: string,
}
