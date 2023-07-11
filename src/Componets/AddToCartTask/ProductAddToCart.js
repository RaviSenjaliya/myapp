import React, { useContext } from 'react'
import AddtoCardcontext from '../Context/AddtoCardcontext'
import  CardDetailsAdd from '../AddToCartTask/CardDetailsAdd'
import { Box, Grid } from '@mui/material'

export default function ProductAddToCart() {
 const {data,cart}  =  useContext(AddtoCardcontext);
 console.log(cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
                data.map((value)=> {
                    return (<CardDetailsAdd item={value}></ CardDetailsAdd>)
                })
            }

</Grid>
<div>{cart.length}</div>
</Box>
  )
}
