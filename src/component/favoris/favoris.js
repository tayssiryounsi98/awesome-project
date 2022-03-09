import React,{useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

//import { MappingCountry } from '../mappingCountry';
//import { NavbarCountry } from '../navbarCountry';
import { CartePays } from '../CartePays';
import { Container } from 'react-bootstrap';


const Favoris = () => {

    const {favoris}=useContext(GlobalContext);

   

  return (

    <Container id="test" className="main-container">
    {favoris.map(data => {
        return (<CartePays key = { data.code } data = { data }/>);
    })}
</Container>

)}
export default Favoris;