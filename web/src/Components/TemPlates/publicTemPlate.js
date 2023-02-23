import React from 'react'
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export default function PublicTemPlate(props) {

    let{Component,path} = props;
    


  return <Route exact path={path} render = {(propsRouter)=>{
    return <div>
        <Header/>
        <Component {...propsRouter}/>
        <Footer/>
    </div>
  }}
  />
}
