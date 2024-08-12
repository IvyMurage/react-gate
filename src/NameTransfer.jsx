import { useState, useEffect } from 'react';

export default function NameTransfer() {
    const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const [names, setNames] = useState([...initialNames]);
    const [newNames, setNewNames] = useState([])


    useEffect(() => {
        const intervalId = setInterval(() => {
            const name = [...names].shift()
            setNewNames(prevNames => [...prevNames, name])
            setNames(prevNames => prevNames.filter(n => n !== name))
        }, 2000)

        if (names.length === 0) clearInterval(intervalId)
        return () => clearInterval(intervalId)

    }, [names])
    return (
        <div>
            {names.length > 0 && <h3>Original Names</h3>}

            <ul style={{ backgroundColor: "red" }}>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            {newNames.length > 0 && <h3>Transferred Names</h3>}
            <ul style={{ backgroundColor: "green" }}>
                {newNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

