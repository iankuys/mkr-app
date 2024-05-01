import React from 'react';
import { keyObject, productCard } from './types';
import { IconBuildingFactory2, IconBuildingCottage, IconBuilding } from '@tabler/icons-react';

export const carouselkeys : keyObject[] =[
    {
        key:
            'MKR-Gallery/constuction-3.jpg',
        title: 'Best forests to visit in North America',
        link: '/products'
    },
    {
        key:
            'MKR-Gallery/fan.jpg',
        title: 'Hawaii beaches review: better than you think',
        link: '/products'
    },
    {
        key:
            'MKR-Gallery/houses-2.jpg',
        title: 'Mountains at night: 12 best locations to enjoy the view',
        link: '/products'
    },
    {
        key:
            'MKR-Gallery/interior.jpg',
        title: 'Aurora in Norway: when to visit for best experience',
        link: '/products'
    },
    {
        key:
            'MKR-Gallery/steel.jpg',
        title: 'Best places to visit this winter',
        link: '/products'
    },
    {
        key:
            'MKR-Gallery/sideview.jpg',
        title: 'Active volcanos reviews: travel at your own risk',
        link: '/products'
    },
];

export const productsDescription : productCard[] = [
    {
        title:
            'Litter / Floor System House',
        description: 'Specific practices that must be followed to properly maintain the litter and maximize the health and productivity of the flocks raised on it.',
        icon: <IconBuildingFactory2 />
    },
    {
        title:
            'Slatted Elevated House',
            description: 'Slatted floor system gives you all the benefits of mechanized manure handling without the problems. Hassle free for daily operation of machinery.',
            icon: <IconBuildingCottage />
    },
    {
        title:
            'Multi-Level House',
        description: 'An economic conversion in existing houses while utilizing the space and increase level of production.',
        icon: <IconBuilding />
    }

]

export const colors = ["#1BA100", "#ff8000"]