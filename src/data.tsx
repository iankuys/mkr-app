import React from 'react';
import { keyObject, productCard, productDescription } from './types';
import { IconBuildingFactory2, IconBuildingCottage, IconBuilding } from '@tabler/icons-react';

export const heroContentDescription = {
    title: 'Welcome to MKR Alliance',
    subtitle: 'Agro House System Specialist',
    description: 'Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation',
    key: 'MKR-Gallery/houses.jpg'
}

export const footerCompanyDescription = [ 
    {
      description: 'Description bla bla bla',
      list: [
        { text: 'One Stop Solution' },
        { text: 'Include all components at different rooms' },
      ],
    },
  ];

export const aboutPageData = [
    {
        title: 'Our Mission',
        description: 'To provide the best quality of Agro House System for our customers. We strive to exceed expectations and deliver innovative solutions that enhance productivity and sustainability.',
        key: 'MKR-Gallery/constuction-3.jpg'
    },
    {
        title: 'Our Vision',
        description: 'To be the leading Agro House System Specialist in the region, recognized for our expertise, reliability, and commitment to customer satisfaction. We aim to revolutionize the industry with cutting-edge technologies and practices.',
        key: 'MKR-Gallery/fan.jpg'
    },
    {
        title: 'Our Values',
        description: 'We value innovation, sustainability, and customer satisfaction. Our core principles guide our decision-making and shape our relationships with customers, partners, and employees.',
        key: 'MKR-Gallery/houses-2.jpg'
    }
]
  
export const carouselkeys: keyObject[] = [
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

export const productsCardDescriptions: productCard[] = [
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
    },
    {
        title:
            'Slatted Elevated House 2',
        description: 'Slatted floor system gives you all the benefits of mechanized manure handling without the problems. Hassle free for daily operation of machinery.',
        icon: <IconBuildingCottage />
    },

]

export const productsPageDescriptionSample: productDescription =
{
    title:
        'Litter / Floor System House',
    description: 'Specific practices that must be followed to properly maintain the litter and maximize the health and productivity of the flocks raised on it.',
    key: 'MKR-Gallery/fan.jpg'
}


export const colors = ["#1BA100", "#ff8000"]