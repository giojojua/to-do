import {useRef} from "react";
import Database from './Database';

export default function AddToDo() {

    const inputAdd = useRef(null)
    const onButtonClick = () => {
        inputAdd.current.focus();

        let newObject = Object.create({
            text: inputAdd.current.value,
            active: true,
            important: false,
            deleted: false
        })

        Database.push(newObject)
        console.log(Database)
    };

    return  (
        <section className='w-100'>
            <form className='add-todo'>
                <input ref={inputAdd} type="text" placeholder='Add To-Do'/>
                <button onClick={onButtonClick} type='button'>Add</button>
            </form>
        </section>
    )
}