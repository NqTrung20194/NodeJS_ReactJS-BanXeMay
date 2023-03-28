import React from "react";

const stateDefault = {
    categories : '',
    detailCategories:'',
    detailUpdate:'',
    imgProductName:'',
    proDucts:'',
    dSSP:''
}

export const adminReducer = (state = stateDefault,action)=>{
    switch(action.type){

        case 'CATEGORIES':{
            state.categories = action.data;
            state.detailCategories ='';
            return{...state};
        }
        case 'DETAIL_CATEGORIES':{
            state.detailCategories = action.data;
            // console.log(state.detailCategories);

            return{...state};
        }

        case 'UPDATE_DETAIL_CATEGORIES':{
            state.detailUpdate = action.data;
            // console.log(action.data);

            return{...state};
        }
        case 'DELETEONE_DETAIL':{
            // state.categories = action.data;
            // console.log(action.data);

            return{...state};
        }
        case 'ADD_DETAIL':{
            // state.detailUpdate = action.data;
            // console.log(action.data);

            return{...state};
        }
        case 'UPLOAD_IMG':{
            state.imgProductName = action.data;
            // console.log(state.imgProductName);
            return{...state};
        }
        case 'ADD_PRODUCT':{
            state.proDucts = action.data;
            // console.log(state.proDucts);
            return{...state};
        }
        case 'GET_PRODUCT':{
            state.dSSP = action.data;
            // console.log(state.dSSP);
            return{...state};
        }

    default: return state;
    }
}