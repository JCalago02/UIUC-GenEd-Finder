import './GpaSelector.css'
import { useState } from 'react'


function GpaSelector({setGPABounds}) {
    const [localGPABounds, setLocalGPABounds] = useState([-2, -1]);

    function HandleMinChange(e) {
        const isValid = e.target.value.length !== 0;
        if (isValid) {
            setLocalGPABounds([e.target.value, localGPABounds[1]]);
        } else {
            setLocalGPABounds([-1, localGPABounds[1]]);
        }
    }

    function HandleMaxChange(e) {
        const isValid = e.target.value.length !== 0;
        if (isValid) {
            setLocalGPABounds([localGPABounds[1], e.target.value]);
        } else {
            setLocalGPABounds([localGPABounds[1], -1]);
        }
    }

    function HandleSubmit() {
        setGPABounds(localGPABounds);
    }

    return (
        <div className="flex-wrapper-gpa">
            <input type="number" className="deci-input" step={0.1} placeholder='Min' onChange={HandleMinChange} ></input>
            <input type="number" className="deci-input" step={0.1} placeholder='Max' onChange={HandleMaxChange}></input>
            <button className='submit' onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default GpaSelector