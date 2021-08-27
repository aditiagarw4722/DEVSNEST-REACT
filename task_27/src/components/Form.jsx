import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoActionAdd } from '../reducers/todoAction';
const Form = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState();

    return (
        <div className="Form-container">
            <div className="form">
                <div className="input">
                    <input type="text" className="form-control" placeholder="Add to list..." onChange={(e)=> {setItem(e.target.value)}} value={item}></input>
            <div className="btn"></div>
                <button onClick={()=>{setItem("");
                if(item){
                    dispatch (TodoActionAdd({
                        title: item, 
                        done: false
                    }))
                }}}>Add </button>
                </div>
                </div>
                </div>);
};
                
    export default Form;