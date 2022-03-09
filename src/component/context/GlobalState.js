import React,{createContext,useReducer,useEffect} from 'react';

import AppReducer from "./AppReducer"



const initialeState={

    favoris:localStorage.getItem('favoris')? JSON.parse(localStorage.getItem('favoris')):[],

   

};

export const GlobalContext=createContext(initialeState);



export const GlobalProvider=props=>{

    const [state,dispatch]=useReducer(AppReducer,initialeState);

    useEffect(()=>{

        localStorage.setItem('favoris',JSON.stringify(state.favoris))

    },[state])



     const addToFavorite=pays=>{

         dispatch({type:"ADD_TO_FAVORITE", payload:pays})

     }

     const removeFromFavorite=(code)=>{

         dispatch({type:"REMOVE_FROM_FAVORITE",payload:code})

     }



    return (

        <GlobalContext.Provider value={{favoris:state.favoris,addToFavorite,removeFromFavorite}}>

            {props.children}

        </GlobalContext.Provider>

    )

}