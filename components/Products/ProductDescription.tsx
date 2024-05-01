import React, { useEffect, useState } from 'react';
import { Grid, Image } from '@mantine/core'; 
import { getUrlResult } from '@/src/helper';

export default function ProductDescription({title, description, key}: {title: string, description:string, key:string}) {
  
  const [imageLink, setImageLink] = useState<Promise<any>>();
  useEffect(() => {
    const image = getUrlResult(key);
    setImageLink(image);
  })
  
  return (
    <Grid>
      <Grid.Col span={12}>
        {title}
      </Grid.Col>
      <Grid.Col span={6}>
        {description}
      </Grid.Col>
      <Grid.Col span={6}>
        <Image src={imageLink}/>
      </Grid.Col>
    </Grid>
  )
}
