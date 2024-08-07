import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard(props) {
  return (
    <Card className='cursor-default'  sx={{ maxWidth: 250, maxHeight: 360 }}>
        <CardMedia
          component="img"
          sx={{ height: 200, width: 230 }}
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.description}
          </Typography>
        </CardContent>
    </Card>
  );
}
