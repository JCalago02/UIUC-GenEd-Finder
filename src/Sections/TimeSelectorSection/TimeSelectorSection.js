import './TimeSelectorSection.css'
import { useState } from 'react'
import DaySelector from '../../Components/DaySelector/DaySelector'
import TimeSelector from '../../Components/TimeSelector/TimeSelector'
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa'

function TimeSelectorSection(setListTimeRestrictions) {
    const kDayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const [dayRestriction, setDayRestriction] = useState({
        startTime: "DEFAULT",
        endTime: "DEFAULT",
        dayList: ["Monday"],
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
        setListTimeRestrictions(dayRestriction);
    }
    
    return (
        <div className='grid-container'>
            <div className='leftCol'>
                <TimeSelector labelText="Earliest Start Time: " HandleChangeTimestate={HandleChangeStartTime}></TimeSelector>
            </div>
            <div className='leftCol'>
                <TimeSelector labelText="Latest End Time: " HandleChangeTimestate={HandleChangeEndTime}></TimeSelector>
            </div>
            <div className='right-col'>
                {kDayList.map((day, index) => (
                    <DaySelector id={index} dayText={day} dayListValue={dayRestriction.dayList.includes(kDayList[index])} HandleChangeDayList={HandleChangeDayList}/>
                ))}
            </div>
            <div className='leftCol grid-wrapper-online'>
                    <label className='h'>Include online/async <br/> classes?</label>
                    {dayRestriction.includeOnline ? (<FaRegCheckSquare className='check-button'onClick={HandleChangeOnline}/>) : (<FaRegSquare className='check-button' onClick={HandleChangeOnline}/>)}
            </div>
            <button className='bottom-span' onClick={HandleSubmitTimeRestriction}>Submit</button>
        </div>
    )
}

export default TimeSelectorSection


