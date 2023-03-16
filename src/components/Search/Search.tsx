import classes from './Search.module.scss'

import searchIcon from '../../assets/search-icon.svg'

const Search = () => {
    return ( <div>
    <input
        className={classes.Search}
        placeholder="Я ищю" 
        name="search" 
        id="search" />
    <img src={searchIcon} alt="search" className={classes.icon}/>
    </div> );
}
 
export default Search;