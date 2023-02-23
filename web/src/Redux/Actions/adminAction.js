import axios from "axios";
import {history} from "../../App";
import {http} from '../../Utility/Setting';

export const danhMucXe = ()=>{
    return async (dispatch)=>{
        try{
            let result = await http.get('/categories');

        // đưa dử liệu lên redux
        dispatch({
            type:'CATEGORIES',
            data: result.data.data
        });
        }
        catch(err){
            console.log('err',err.response?.data)
        }
    }
}