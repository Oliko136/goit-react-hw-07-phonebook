import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter-slice';
import { getFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const handleFilterChange = ({ target }) => {
        const name = target.value.toLowerCase();
        dispatch(setFilter(name));
    }

    return (
        <input className={styles.filter} value={filter} name="filter" placeholder="Search by name" onChange={handleFilterChange}/>
    )
}
