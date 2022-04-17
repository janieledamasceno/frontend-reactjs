import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for (let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid className="col-lg-2 col-md-3 col-sm-5 col-xs-12 m-1 borda p-0" style={{borderRadius:'10px'}}>
                <Paper className={classes.paper} style={{borderRadius:'20px'}}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List className="m-0 p-1" style={{backgroundColor: '#a35481', width:'100%', color:'#000000'}}>
                        {category.map(
                            category => {
                                return (
                                    <Item
                                        key = {category.id} 
                                        name= {category.name}
                                        details={count[category.name]}
                                    />
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root} style={{backgroundColor:'#a35481', color:'#000000'}}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
