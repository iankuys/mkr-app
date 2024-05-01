import React from 'react';
import { Grid } from '@mantine/core'; 

export default function ProductSample() {
  return (
    <Grid>
      <Grid.Col span={12}>
        1
      </Grid.Col>
      <Grid.Col span={6}>
        2
      </Grid.Col>
      <Grid.Col span={6}>
        3
      </Grid.Col>
    </Grid>
  )
}
