import React from 'react';
import { keyObject, productCard, productRawObject } from './types';
import { IconBuildingFactory2, IconBuildingCottage, IconBuilding } from '@tabler/icons-react';

export const heroContentDescription = {
    title: 'Welcome to MKR Alliance',
    subtitle: 'Agro House System Specialist',
    description: 'Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation',
    key: 'MKR-Gallery/houses.jpg'
}

export const headerMenuLinks = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    {
        link: '#',
        label: 'Our Products',
        links: [
            { link: '/products/CageHouses', label: 'Cage Houses' },
            { link: '/products/FloorSystemHouse', label: 'Litter/Floor System House' },
            { link: '/products/ElevatedHouse', label: 'Elevated House' },
            { link: '/products/MultiLevelHouse', label: 'Multi-Level House' },
            { link: '/products/Hatchery', label: 'Hatchery' },
            { link: '/products/ProcessingPlant', label: 'Processing Plant' },
            { link: '/products/FermentationPlant', label: 'Fermentation Plant' },
            { link: '/products/Feedmill', label: 'Feedmill' },
            { link: '/products/Piggeries', label: 'Piggeries' },
        ],
    },
    {
        link: '#',
        label: 'Our Services',
        links: [
            { link: '/services/Consultaion&Advisory', label: 'Consultaion & Advisory' },
            { link: '/services/ProfessionalDesign', label: 'ProfessionalDesign' },
        ],
    },
    { link: '/gallery', label: 'Gallery' },
    {
        link: '#',
        label: 'Community',
        links: [
            { link: '/community/Exhibition', label: 'Exhibition' },
            { link: '/community/Seminar', label: 'Seminar' },
        ],
    },
    { link: '/contact', label: 'Contact Us' },
];

export const cageHouses: productRawObject = {
    title: 'Cage Houses',
    description: 'Cage houses are designed to provide a comfortable environment for the birds, while also ensuring that the eggs are kept clean and safe. The cages are made of high-quality materials that are easy to clean and maintain, and are designed to provide the birds with plenty of space to move around and exercise.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const litterFloor: productRawObject = {
    title: 'Litter/Floor System House',
    description: 'Specific practices that must be followed to properly maintain the litter and maximize the health and productivity of the flocks raised on it.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};
export const elevatedHouse: productRawObject = {
    title: 'Elevated House',
    description: 'Slatted floor system gives you all the benefits of mechanized manure handling without the problems. Hassle free for daily operation of machinery.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const multiLevelHouse: productRawObject = {
    title: 'Multi-Level House',
    description: 'An economic conversion in existing houses while utilizing the space and increase level of production.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const hatchery: productRawObject = {
    title: 'Hatchery',
    description: 'Hatchery is a place where eggs are hatched under artificial conditions, especially those of poultry or fish.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const processingPlant: productRawObject = {
    title: 'Processing Plant',
    description: 'Processing plant is a facility where raw materials are processed into finished products.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const fermentationPlant: productRawObject = {
    title: 'Fermentation Plant',
    description: 'Fermentation plant is a facility where raw materials are processed into finished products.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const feedmill: productRawObject = {
    title: 'Feedmill',
    description: 'Feedmill is a facility where raw materials are processed into finished products.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const piggeries: productRawObject = {
    title: 'Piggeries',
    description: 'Piggeries is a facility where raw materials are processed into finished products.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const consultationAdvisory = {
    title: 'Consultaion & Advisory',
    descriptionList: [
        'Provide professional advice on local authority requirements and regulations.',
        'Provide technical advice and feasibility recommendations based on site location, ground condition, weather condition.',
        'Provide option studies on the most efficient farm layout to achieve maximum land utilization and production.',    ],
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const professionalDesign = {
    title: 'Professional Design',
    descriptionList: [
        'Team of engineers led by an experienced qualified professional engineer.',
        'Design aimed for easy shipping & easy on-site installation.',
        'Economical design while maintaining the highest quality of the product. Team of experienced QC to ensure quality assurance and error-free fabrication.',
        'Environmentally friendly design to ensure minimal material wastage and energy consumption.',
    ],
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

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
        s3key:
            'MKR-Gallery/constuction-3.jpg',
        title: 'Best forests to visit in North America',
        link: '/products'
    },
    {
        s3key:
            'MKR-Gallery/fan.jpg',
        title: 'Hawaii beaches review: better than you think',
        link: '/products'
    },
    {
        s3key:
            'MKR-Gallery/houses-2.jpg',
        title: 'Mountains at night: 12 best locations to enjoy the view',
        link: '/products'
    },
    {
        s3key:
            'MKR-Gallery/interior.jpg',
        title: 'Aurora in Norway: when to visit for best experience',
        link: '/products'
    },
    {
        s3key:
            'MKR-Gallery/steel.jpg',
        title: 'Best places to visit this winter',
        link: '/products'
    },
    {
        s3key:
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

// export const productsPageDescriptionSample: productDescription =
// {
//     title:
//         'Litter / Floor System House',
//     description: 'Specific practices that must be followed to properly maintain the litter and maximize the health and productivity of the flocks raised on it.',
//     s3keys: 'MKR-Gallery/fan.jpg'
// }


export const colors = ["#1BA100", "#ff8000"]