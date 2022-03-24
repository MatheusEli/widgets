import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        }

        search();


    }, [term]);


    const onSearchTyped = (event) => {
        setTerm(event.target.value);
    }

    const renderedResults = results.map((result) => {
        return (
        <div className="item" key={result.pageid}>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
            </div>
        </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search theme</label>
                    <input value={term} onChange={onSearchTyped} className="input"></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;