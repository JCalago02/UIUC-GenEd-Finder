import './TimeSelectorSection.css'
import { useState } from 'react'
import DaySelector from '../../Components/DaySelector/DaySelector'
import TimeSelector from '../../Components/TimeSelector/TimeSelector'
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa'

function TimeSelectorSection({setTimeList}) {
    const kDayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const [dayRestriction, setDayRestriction] = useState({
        dayList: [],
        startTime: "DEFAULT",
        endTime: "DEFAULT",
        includeOnline: false
    });    


    function HandleChangeDayList(id) {
        var newDayList = dayRestriction.dayList;
        if (newDayList.includes(kDayList[id])) {
            const index = newDayList.indexOf(kDayList[id])
            newDayList.splice(index, 1)
        } else {
            newDayList.push(kDayList[id])
        }
        setDayRestriction({
            ...dayRestriction,
            dayList: newDayList
        });
    }

    function HandleChangeOnline() {
        setDayRestriction({
            ...dayRestriction,
            includeOnline: !dayRestriction.includeOnline
        });
    }

    function HandleChangeStartTime(newTime) {
        setDayRestriction({
            ...dayRestriction,
            startTime: newTime
        });
    }

    function HandleChangeEndTime(newTime) {
        setDayRestriction({
            ...dayRestriction,
            endTime: newTime
        });
    }

    function HandleSubmitTimeRestriction() {
        setTimeList(dayRestriction);
    }
    
    return (
        <div className='grid-container'>
            <div className='left-col'>
                <TimeSelector labelText="Earliest Start Time: " HandleChangeTimestate={HandleChangeStartTime}></TimeSelector>
            </div>
            <div className='left-col'>
                <TimeSelector labelText="Latest End Time: " HandleChangeTimestate={HandleChangeEndTime}></TimeSelector>
            </div>
            <div className='left-col grid-wrapper-online'>
                    <label className='async-toggle-label'>Include online/async <br/> classes?</label>
                    {dayRestriction.includeOnline ? (<FaRegCheckSquare className='check-button'onClick={HandleChangeOnline}/>) : (<FaRegSquare className='check-button' onClick={HandleChangeOnline}/>)}
            </div>
            <div className='right-col'>
                {kDayList.map((day, index) => (
                    <DaySelector key={index} id={index} dayText={day} dayListValue={dayRestriction.dayList.includes(kDayList[index])} HandleChangeDayList={HandleChangeDayList}/>
                ))}
            </div>
            <button className='bottom-span' onClick={HandleSubmitTimeRestriction}>Submit</button>
        </div>
    )
}

export default TimeSelectorSection


