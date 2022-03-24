import { useState, useEffect } from "react";
import React from "react";
import wikipedia from "../apis/wikipedia";

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        
    });
    
    const onSearchTyped = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search theme</label>
                    <input value={term} onChange={onSearchTyped} className="input"></input>
                </div>
            </div>
        </div>
    );
}

export default Search;