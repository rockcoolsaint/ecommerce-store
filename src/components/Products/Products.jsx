import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/**const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5.00', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg' },
  { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$10.00', image: 'https://static.bhphoto.com/images/largeimages/apple_z0yj_mwtj28_13_macbook_air_space_1584567307000_1553905.jpg' },
]*/

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;