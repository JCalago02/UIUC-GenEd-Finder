import './TimeSelector.css'

function TimeSelector({labelText, HandleChangeTimestate}) {
    function HandleTimeChange(e) {
        var newStr = e.target.value
        if (newStr.length == 5) {
            var hour = parseInt(newStr.substring(0,2))
            const isPM = hour > 11
            if (hour == 0) {
                hour = 12;
            } else {
                if (hour == 12) hour = 24;
            }
            if (isPM) {
                newStr = (hour - 12).toString() + newStr.substring(2, 5) + " PM"
            } else {
                newStr = (hour).toString() + newStr.substring(2,5) + " AM"
            }
            console.log(newStr)
            HandleChangeTimestate(newStr);
        } else {
            HandleChangeTimestate("DEFAULT");
        }
    }
    return (
        <div className="grid-wrapper-time">
            <label>{labelText}</label>
            <input onChange={HandleTimeChange} className='time-input' type='time'/>
        </div>
    )
}

export default TimeSelector