import React from 'react'
import { Route } from 'react-router-dom';
import HeaderAdmin from '../Header/headerAdmin';

export default function AdminTemPlate(props) {

    let{Component,path} = props;
    
console.log(path)

  return <Route exact path={path} render = {(propsRouter)=>{
    return <div>
        <HeaderAdmin/>
        <Component {...propsRouter}/>
    </div>
  }}
  />
}
