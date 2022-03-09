import React, { useEffect, useState } from 'react';
//import { StyleSheet, Text, View } from "react-native";
import { CartePays } from '../CartePays';
import './mappingCountry.css';
import axios from "axios";
import { Container } from 'react-bootstrap';

const MappingCountry = ({data}) => {

    const [paysList, setTopPaysList] = useState([]);
    const getAllPays = async() => {
        const {data} = await axios.get("https://www.citysearch-api.com/fr/pays?login=APP_LOGIN&apikey=APP_KEY");    
        setTopPaysList(data.results);
    }

    useEffect(() => {
      getAllPays();
    }, []);
    
    return (
        <Container id="test" className="main-container">
                {paysList.map(data => {
                    return (<CartePays key = { data.code } data = { data }/>);
                })}
        </Container>
    );
}

export default MappingCountry;
