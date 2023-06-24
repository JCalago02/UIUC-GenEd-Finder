import './TimeSelector.css'

function TimeSelector({labelText, HandleChangeTimeState}) {
    function HandleTimeChange(e) {
        const unformattedTime = e.target.value;
        const isValidTime = unformattedTime.length === 5;
        if (isValidTime) {
            var formattedTime = "";
            const isPM = parseInt(unformattedTime.substr(0,2)) / 11 > 1;
            if (isPM) {
                if (unformattedTime.substr(0, 2) === "12") {
                    formattedTime += "12";
                } else {
                    const unformattedHour = parseInt(unformattedTime.substr(0,2));
                    formattedTime += (unformattedHour - 12).toString(); // formats hour from military time to standard
                }
                formattedTime += unformattedTime.substr(2, 5); // adds minutes (PM Branch)
                formattedTime += " PM" 
                console.log(formattedTime);
            } else {
                if (unformattedTime.substr(0, 2) === "00") {
                    formattedTime += "12"; // formates hour from military time to standard time
                } else {
                    formattedTime += unformattedTime.substr(0, 2); // adds hour
                }
                formattedTime += unformattedTime.substr(2, 5); // adds minutes
                formattedTime += " AM"
                console.log(formattedTime);
            }
            HandleChangeTimeState(formattedTime);
        } else {
            HandleChangeTimeState("DEFAULT");
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