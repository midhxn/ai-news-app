import { Card, CardActions, CardContent, Button, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

const NewsCard = ({article: { description, publishedat, source, title, url
}}) => {
  return (
       <Card>
         <CardActionArea>
           <CardMedia/>
           <div>
             <Typography variant="body" color="textSecondary" component="h2"></Typography>
             <Typography variant="body" color="textSecondary" component="h2"></Typography>
           </div>
           <Typography gutterBottom variant="h5"></Typography>
           <CardContent>
             <Typography variant="body2" color="textSecondary" component="p"></Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
           <Button size="small" color="primary"></Button>
           <Typography variant="h5" color="textSecondary"></Typography>
         </CardActions>
       </Card>
  )
}

export default NewsCard;