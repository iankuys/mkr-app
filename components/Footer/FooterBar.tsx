"use client"

import { List, Text, Container, ActionIcon, Group, Image, Stack, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import NextImage from 'next/image';
import mkr_logo from '@/public/mkr_logo.png'
import { footerCompanyDescription } from '@/src/data';
import { GetInTouchSimple } from './GetInTouchSimple';

export function FooterLinks() {
  const groups = footerCompanyDescription.map((group) => {
    const links = group.list.map((link, index) => (
      <List.Item
        key={index}
      >
        {link.text}
      </List.Item>
    ));

    return (
      <div className={classes.wrapper} key={group.description}>
        <List>
          <Text className={classes.title}>{group.description}</Text>
          {links}
        </List>
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Group justify="space-between" grow>
        <Stack className={classes.inner}>
          <div className={classes.logo}>
            <Image component={NextImage} src={mkr_logo} alt="mkr logo" height={110} />
          </div>
          <div className={classes.groups}>{groups}</div>
        </Stack>
        <GetInTouchSimple />
      </Group>
      <Container fluid className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 MKR Alliance. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}