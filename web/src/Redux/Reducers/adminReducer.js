import React from "react";

const stateDefault = {
    categories : ''
}

export const adminReducer = (state = stateDefault,action)=>{
    switch(action.type){

        case 'CATEGORIES':{
            state.categories = action.data;
            return{...state};
        }

    default: return state;
    }
}