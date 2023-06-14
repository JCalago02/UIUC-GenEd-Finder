import './ClassCard.css'
import { FaUser, FaFolder, FaGraduationCap, FaBookReader, FaClock } from "react-icons/fa";
function ClassCard({classInfo}) {
    return (
        <div className="class-card-wrapper">
            <label className="card-text-bold">{classInfo.title} - {classInfo.name}</label>
            <hr className="header-bold"></hr>
            <FaUser className="card-icon"/>
            <label className="card-text">{classInfo.instructor}</label>
            <FaFolder className="card-icon"/>
            <label className="card-text">{classInfo.categoryList.join(' | ')}</label>
            <FaGraduationCap className="card-icon"/>
            <label className="card-text">Prof: {classInfo.instGPA} | Overall: {classInfo.allGPA}</label>
            <FaBookReader className="card-icon"/>
            <label className="card-text">{classInfo.section}</label>
            <FaClock className="card-icon"/>
            <label className="card-text">{classInfo.time} | {classInfo.days.join('')}</label>
            <a className="course-link-button" href={classInfo.link}>Course Explorer</a>
                
            
        </div>
    )
}

export default ClassCard;

/*
    class info parameters:
        title
        name
        instructor
        instructor GPA
        overall GPA
        category
        Meeting Time
        Meeting Days
        Course Explorer Link
*/