import './GpaSelector.css'
function GpaSelector(setMinGPA) {
    return (
        <div className="flex-wrapper-gpa">
             <input type="number" className="deci-input" step={0.1} placeholder='Min'></input>
            <input type="number" className="deci-input" step={0.1} placeholder='Max'></input>
            <button className='submit'>Submit</button>
        </div>
    )
}

export default GpaSelector