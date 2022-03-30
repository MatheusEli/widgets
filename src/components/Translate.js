import React, { useState } from "react";
import Dropdown from "./Dropdown";


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <h1>Hello World!</h1>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
                label="Select a Language"
            />
        </div>
    );
}

export default Translate;