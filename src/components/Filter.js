import { useSelector, useDispatch } from 'react-redux';
import {changeFilter} from '../redux/Contacts/contact-actions';
import {getFilter} from '../redux/Contacts/contact-selectors'

const Filter = () => {

const value = useSelector(getFilter);
const dispatch = useDispatch();
const onChange = (e) => dispatch(changeFilter(e.target.value));
    
return(
        <div>
           Поиск контактов по имени
           <input
           type = 'text'
           value ={value}
           onChange = {onChange}/>
        </div>
    )
}



// const mapStateToProps = state => ({
//     value: state.contacts.filter
// });

// const mapDispatchToProps = dispatch => ({
// onChange: (e) => dispatch(actions.changeFilter(e.target.value))
// });

export default Filter;