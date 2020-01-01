import React, { useState, useRef, useEffect } from 'react';
import './AutoFocusInput.css';

export default function AutoFocusInput(props) {

    const ref = useRef(null);
    const [userName, setUserName] = useState("something here...");
    useEffect(() => {
        ref.current.focus()
    }, []);
    
    const handleSubmit = (e) => {
        e.persist();
        e.preventDefault();
        const input = ref.current.value;
        if (input === "") {
            alert("Please enter input before submit! ");

        } else {
            setUserName(input);
            ref.current.value = "";
        }
    }
    return (
        <div className="container-input">
            <form onSubmit={handleSubmit}>
                New Username: <input type="text" ref={ref} />
                <input type="submit" value="submit" />
            </form>
            <div>Current username: {userName}</div>
        </div>
    );
}