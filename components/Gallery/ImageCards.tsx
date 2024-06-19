import React from 'react';
import { Grid, Paper, Text, Image } from '@mantine/core';
import './Gallery.css'; // import your css
import { imageGalleryObject } from '@/src/types';
import { galleryObjects } from '@/src/data';
import { useState, useEffect } from 'react';
import { getUrlResult } from '@/src/helper';

const ImageComponent: React.FC<imageGalleryObject> = ({ url, title, link }) => (
    <a href={link}>
        <div className="image-container">
            <Image
                radius="md"
                h={300}
                src={url}
            />
            <Paper className="overlay">
                <Text size="lg" style={{ color: 'white'}}>{title}</Text>
            </Paper>
        </div>
    </a>
);

const ImageCards: React.FC = () => {

    const [imageObjects, setImageObjects] = useState<imageGalleryObject[]>([]);

    useEffect(() => {
        fetchURL();
    }, []);

    async function fetchURL() {
        const newImageObjects: imageGalleryObject[] = [];

        await Promise.all(
            galleryObjects.map(async (object) => {
                try {
                    const response = await getUrlResult(object.s3key);

                    if (response) {
                        newImageObjects.push({
                            url: response,
                            title: object.title,
                            link: object.link
                        });
                    } else {
                        console.error("Error fetching from S3");
                    }
                } catch (error) {
                    console.error("Error getting URL");
                }

            })
        )
        console.log(newImageObjects)
        setImageObjects(newImageObjects);
    }

    return (
        <Grid px="1rem" py="1rem">
            {imageObjects?.map((imageObject: imageGalleryObject, index) => {
                return (
                    <Grid.Col span={4} key={imageObject.url}>
                        <ImageComponent key={index} {...imageObject} />
                    </Grid.Col>
                )
            })}
        </Grid>
    );
};

export default ImageCards;
