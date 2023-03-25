import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import classes from './Sidebar.module.scss'

const Sidebar = () => {
    const [categories, setCategories] = useState<any[]>([])
    useEffect(()=>{
        axios.get(api + 'categories/')
        .then((res)=>{
            setCategories(res.data.results)
        })
    })
    return ( <div className={classes.Sidebar}>
        <ul>
            {categories.map((item)=>{
                return <li key={Math.random()}><a href={item.slug}>{item.name}</a></li>
            })}
        </ul>
    </div> );
}
 
export default Sidebar;