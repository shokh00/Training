import { useState } from 'react'

export default function App() {

    const [open , setOpen] = useState(false);

    return (
        <div className='container'>
            <button onClick={() => setOpen(!open)} >✨Open Modal</button>
            <div className={`modal ${open ? "" : "hidden"}`}>
                <h1>Hello</h1>
                <h2 onClick={() => setOpen(!open)}>*</h2>
            </div>
        </div>
    )
}