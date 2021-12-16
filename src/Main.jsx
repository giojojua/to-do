import {useEffect, useState} from "react";

export default function Main() {
    let [number, setNumber] = useState(0)
    let [string, setString] = useState('Hello')
    let [hasNumber, setHasNumber] = useState(false)

    useEffect(() => {
        console.log('Username inserted')
    }, [string])

    const increaseNumber = () => {
        let newNumber = number + 1
        setNumber(newNumber)
        setHasNumber(true)
    }

    const decreaseNumber = () => {
        let newNumber = number - 1
        setNumber(newNumber)
        setHasNumber(true)
    }

    const changeTittle = () => {
        let newTittle = string = 'Hello Gio'
        setString(newTittle)
        setHasNumber(false)
    }
    return (
        <>
            <div className="container">
                <h1>{`${string}`}</h1>
                <div>
                    <button onClick={changeTittle}>Say Hello</button>
                </div>
                <h2>{`Number + ${number}`}</h2>
                { hasNumber && <p>It's Number</p> }
                <div>
                    <button onClick={increaseNumber}>Increase</button>
                    <button onClick={decreaseNumber}>Decrease</button>
                </div>
            </div>
        </>
    )
}