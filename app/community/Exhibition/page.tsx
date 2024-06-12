"use client";

import React from 'react';
import { Card, Container, Paper, Text, Title, Center, Grid } from '@mantine/core';

interface NewsPageProps {
    news: string[];
}

const sampleNews = [
    {
        title: 'News 1',
        content: 'This is the first news',
    },
    {
        title: 'News 2',
        content: 'This is the second news',
    }
]

const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
    return (
        <>
            <Center h={120} bg="var(--mantine-color-gray-light)">
                <Title order={1}>
                    Exhibition
                </Title>
            </Center>
            <Grid style={{marginBlock: '2%', paddingInline: '1%'}}>
                {sampleNews.map((item, index) => (
                    <Grid.Col span={3}>
                        <Card withBorder style={{
                            height: '500px',
                            boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.15)',
                        }}>
                            <Card.Section>
                                <Title key={index} style={{ marginBottom: '0.5rem' }}>
                                    {item.title}
                                </Title>
                            </Card.Section>
                            <Text key={index} style={{ marginBottom: '0.5rem' }}>
                                {item.content}
                            </Text>

                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    );
};

export default NewsPage;