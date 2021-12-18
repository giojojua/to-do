import {useState} from "react";

export default function ToDoStatus() {

    let [bgColor, setBgColor] = useState('bg-green')
    let [text, setText] = useState('!')

    const toggleImportant = () => {
        if (bgColor === 'bg-green' && text === '!'){
            let newBgColor = 'bg-red'
            setBgColor(newBgColor)

            let newText = 'Important'
            setText(newText)
        } else {
            let newBgColor = 'bg-green'
            setBgColor(newBgColor)

            let newText = '!'
            setText(newText)
        }
    }

    return (
        <div className='todo-status'>
            <button className={`${bgColor}`} onClick={toggleImportant}>{`${text}`}</button>
            <button>D</button>
        </div>
)
}