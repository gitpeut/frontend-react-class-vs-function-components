import React from 'react';
import './App.css';

function App() {
    const [state, toggleState] = React.useState({lighton: true});

    function toggleClick(e) {

        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        if (typeof state[e.target.name] === "boolean") {
            //toggle boolean
            value = !state[e.target.name];
        }
        toggleState({...state, [e.target.name]: value});

    }

    return (
        <div>
            <button
                type="button"
                name="lighton"
                onClick={toggleClick}
            >
                {state.lighton ? 'AAN' : 'UIT'}
            </button>
        </div>
    );
}

export default App;
