import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent style={{
                    backgroundColor: '#4a4a4a',
                }}>
                <div>
                    <Typography style={{color:"#fff"}} variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography style={{color:"#fff"}} varient='h7' gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography style={{color:"#fff"}} dangerouslySetInnerHTML ={{ __html: product.description }}variant="body2" color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton style={{color:"#fff"}} aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product