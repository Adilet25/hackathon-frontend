import axios from "axios";
import { api } from "../api";


export class Products{
    getAllProducts(){
        axios.get(api + 'products/')
        .then(res => {
            return(res.data.results)
        });
    }
}