import './TimeSelectorSection.css'
import { useState } from 'react'
import DaySelector from '../../Components/DaySelector/DaySelector'
function TimeSelectorSection() {
    const kDayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const [dayList, setDayList] = useState(Array(16).fill(false))
    function HandleChangeDayList(id) {
        const newList = (dayList.map((listValue, listId) => {
            if (listId === id) {
                return !listValue;
            } else {
                return listValue;
            }
        }));
        setDayList(newList);
    }
    return (
        <div className='grid-container'>
            <div className='leftCol'>
                a
            </div>
            <div className='leftCol'>

            </div>
            <div className='right-col'>
                {kDayList.map((day, index) => (
                    <DaySelector id={index} dayText={day} dayListValue={dayList[index]} HandleChangeDayList={HandleChangeDayList}/>
                ))}
            </div>
        </div>
    )
}

export default TimeSelectorSection