import React from 'react';
//import {GlobalContext} from '../context/GlobalState';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

import './cartePays.css';
/*
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  */
const CartePays = ({ data }) => {
    //const [expanded, setExpanded] = React.useState(false);
    // const {addToFavorite,favoris}=useContext(GlobalContext)
  /*
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    */
    return (
      <Card className="item" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={ "https://flagcdn.com/w320/" + data.code.toLowerCase() + ".png" }
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            { data.pays }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }

export default CartePays;
//const CartePays = ({ data })