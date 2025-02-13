import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

export default function BasicMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <MasonryItem key={index}>
            <Box
              sx={{
                textAlign: 'center',
                height,
                border: 1,
                bgcolor: 'background.paper',
              }}
            >
              {index + 1}
            </Box>
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
  );
}
