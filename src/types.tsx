import React from "react";
import { IconArrowLeft } from '@tabler/icons-react'

export interface CardProps {
    url: string;
    title: string;
}

export interface keyObject {
    key: string,
    title: string,
    link: string
    // Add any additional properties of the string object here
}

export interface aboutObject {
    title: string,
    description: string,
    imageObject: imageFixedObject
}

export interface imageFixedObject {
    url: string,
    key: string,
    // Add any additional properties of the string object here
}

export interface imageObject {
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


export interface productDescription {
    title: string,
    description: string,
    key: string
    // Add any additional properties of the string object here
}

