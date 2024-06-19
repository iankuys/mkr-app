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
            { link: '/services/Consultation&Advisory', label: 'Consultation & Advisory' },
            { link: '/services/ProfessionalDesign', label: 'Professional Design' },
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
    s3keys: [
        'MKR-Gallery/CAGE HOUSE/inside1.jpg',
        'MKR-Gallery/CAGE HOUSE/inside2.jpg',
        'MKR-Gallery/CAGE HOUSE/inside3.jpg'
    ]
};

export const litterFloor: productRawObject = {
    title: 'Litter/Floor System House',
    description: 'Specific practices that must be followed to properly maintain the litter and maximize the health and productivity of the flocks raised on it.',
    s3keys: [
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5110.JPG', 
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5113.JPG',
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5115.JPG',
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5121.JPG',
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5124.JPG',
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5125.JPG',
        'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5127.JPG',
    ]
};
export const elevatedHouse: productRawObject = {
    title: 'Elevated House',
    description: 'Slatted floor system gives you all the benefits of mechanized manure handling without the problems. Hassle free for daily operation of machinery.',
    s3keys: [
        'MKR-Gallery/ELEVATED HOUSE/PKPS/inside1.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/inside2.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/inside3.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/inside4.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/outside1.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/outside2.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/outside3.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/outside4.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/roof.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/roof2.jpg',
        'MKR-Gallery/ELEVATED HOUSE/PKPS/tank.jpg',
    ]
};

export const multiLevelHouse: productRawObject = {
    title: 'Multi-Level House',
    description: 'An economic conversion in existing houses while utilizing the space and increase level of production.',
    s3keys: [
        'MKR-Gallery/DOUBLE STOREY/outside.jpg', 
        'MKR-Gallery/DOUBLE STOREY/outside2.jpg',
        'MKR-Gallery/DOUBLE STOREY/outside3.jpg',
    ]
};

export const hatchery: productRawObject = {
    title: 'Hatchery',
    description: 'Hatchery is a place where eggs are hatched under artificial conditions, especially those of poultry or fish.',
    s3keys: [
        'MKR-Gallery/HATCHERY/CP KLUANG/warehouse_corner.jpeg', 
        'MKR-Gallery/HATCHERY/CP KLUANG/warehouse_front.jpeg', 
        'MKR-Gallery/HATCHERY/GREAT HARVEST/warehouse_corner.jpeg', 
        'MKR-Gallery/HATCHERY/GREAT HARVEST/warehouse_front.jpeg', 
    ]
};

export const processingPlant: productRawObject = {
    title: 'Processing Plant',
    description: 'Processing plant is a facility where raw materials are processed into finished products.',
    s3keys: [
        'MKR-Gallery/FERMENTATION PLANT/plant_front.JPG', 
        'MKR-Gallery/FERMENTATION PLANT/plant_in.JPG',
        'MKR-Gallery/FERMENTATION PLANT/plant_tank.JPG',
        'MKR-Gallery/FERMENTATION PLANT/plant_tank2.JPG',
    ]
};

export const fermentationPlant: productRawObject = {
    title: 'Fermentation Plant',
    description: 'Fermentation plant is a facility where raw materials are processed into finished products.',
    s3keys: [
        'MKR-Gallery/FERMENTATION PLANT/plant_front.JPG', 
        'MKR-Gallery/FERMENTATION PLANT/plant_in.JPG',
        'MKR-Gallery/FERMENTATION PLANT/plant_tank.JPG',
        'MKR-Gallery/FERMENTATION PLANT/plant_tank2.JPG',
    ]
};

export const feedmill: productRawObject = {
    title: 'Feedmill',
    description: 'Feedmill is a facility where raw materials are processed into finished products.',
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const piggeries: productRawObject = {
    title: 'Piggeries',
    description: 'Piggeries is a facility where raw materials are processed into finished products.',
    s3keys: [
        'MKR-Gallery/SWINE/CHAU YANG/swine_house.jpg', 
        'MKR-Gallery/SWINE/CHAU YANG/swine_house2.jpg',
        'MKR-Gallery/SWINE/CHAU YANG/swine_inside.jpg',
        'MKR-Gallery/SWINE/CHAU YANG/swine_inside2.jpg',
    ]
};

export const consultationAdvisory = {
    title: 'Consultation & Advisory',
    descriptionList: [
        {
            title: 'Provide professional advice on local authority requirements and regulations.',
            description: 'Our team of experts will guide you through the complex landscape of local authority requirements and regulations, ensuring that your project meets all necessary standards.'
        },
        {
            title: 'Provide technical advice and feasibility recommendations based on site location, ground condition, weather condition.',
            description: 'Our experienced professionals will analyze your site location, ground condition, and weather condition to provide you with technical advice and feasibility recommendations, helping you make informed decisions.'
        },
        {
            title: 'Provide option studies on the most efficient farm layout to achieve maximum land utilization and production.',
            description: 'We will conduct option studies to determine the most efficient farm layout that maximizes land utilization and production, optimizing your resources and increasing your productivity.'
        },
    ],
    s3keys: ['MKR-Gallery/fan.jpg', 'MKR-Gallery/houses.jpg']
};

export const professionalDesign = {
    title: 'Professional Design',
    descriptionList: [
        {
            title: 'Team of engineers led by an experienced qualified professional engineer.',
            description: 'Our team of engineers, led by an experienced qualified professional engineer, will ensure that your project is designed to the highest standards, meeting all technical requirements.'
        },
        {
            title: 'Design aimed for easy shipping & easy on-site installation.',
            description: 'We prioritize easy shipping and on-site installation in our design process, ensuring that your project can be seamlessly transported and installed without any complications.'
        },
        {
            title: 'Economical design while maintaining the highest quality of the product. Team of experienced QC to ensure quality assurance and error-free fabrication.',
            description: 'We strive for an economical design that doesn\'t compromise on quality. Our team of experienced quality control professionals ensures that every fabrication process is error-free and meets the highest standards.'
        },
        {
            title: 'Environmentally friendly design to ensure minimal material wastage and energy consumption.',
            description: 'We prioritize environmentally friendly design practices to minimize material wastage and energy consumption, contributing to a sustainable and eco-friendly project.'
        },
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

export const galleryObjects: keyObject[] = [
    {
        s3key:
            'MKR-Gallery/FLOOR SYSTEM HOUSE/IMG_5110.JPG',
        title: 'Floor System House',
        link: '/products/FloorSystemHouse'
    },
    {
        s3key:
            'MKR-Gallery/HATCHERY/CP KLUANG/warehouse_corner.jpeg',
        title: 'Hatchery',
        link: '/products/Hatchery'
    },
    {
        s3key:
            'MKR-Gallery/FERMENTATION PLANT/plant_front.JPG',
        title: 'Fermentation Plant',
        link: '/products/FermentationPlant'
    },
    {
        s3key:
            'MKR-Gallery/SWINE/CHAU YANG/swine_house.jpg',
        title: 'Piggeries',
        link: '/products/Piggeries'
    },
    {
        s3key:
            'MKR-Gallery/ELEVATED HOUSE/PKPS/inside1.jpg',
        title: 'Elevated House',
        link: '/products/ElevatedHouse'
    },
    {
        s3key:
            'MKR-Gallery/CAGE HOUSE/inside1.jpg',
        title: 'Cage Houses',
        link: '/products/CageHouses'
    },
    {
        s3key:
            'MKR-Gallery/DOUBLE STOREY/outside.jpg',
        title: 'Multi-Level House',
        link: '/products/MultiLevelHouse'
    },
    {
        s3key:
            'MKR-Gallery/FERMENTATION PLANT/plant_in.JPG',
        title: 'Processing Plant',
        link: '/products/ProcessingPlant'
    },
    {
        s3key:
            'MKR-Gallery/fan.jpg',
        title: 'Feedmill',
        link: '/products/Feedmill'
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