import './FindClasses.css'
import SearchFilterRow from '../../Sections/SearchFilterRow/SearchFilterRow';
import RestrictionList from '../../Sections/RestrictionList/RestrictionList';
import { useState } from 'react';
import ClassCard from '../../Components/ClassCard/ClassCard';

const testClassInfo = {
    title: "HIST 141",
    name: "Western Worlds: Ancient and Medieval Socities from the Mediterranean to Northern Europe",
    instructor: "Symes, C",
    categoryList: ["CS - Western", "Hum - Hist & Phil"],
    instGPA: 3.4,
    allGPA: 3.6,
    section: "Lecture",
    time: "11:00AM - 11:50AM",
    days: ['T', 'R'],
    link: "https://courses.illinois.edu/schedule/2023/fall/HIST/141"
}

function FindClasses() {
    const [restrictionList, setRestrictionList] = useState(["Hello", "There"]);
    return (
        <div className="find-classes-page-content">
            <SearchFilterRow restrictionList={restrictionList} setRestrictionList={setRestrictionList}/>
            <RestrictionList restrictionList={restrictionList} setRestrictionList={setRestrictionList}/>
            <div className='find-classes-results-container'>
                <ClassCard classInfo={testClassInfo}></ClassCard>
                <ClassCard classInfo={testClassInfo}></ClassCard>
                <ClassCard classInfo={testClassInfo}></ClassCard>
                <ClassCard classInfo={testClassInfo}></ClassCard>
                <ClassCard classInfo={testClassInfo}></ClassCard>
                <ClassCard classInfo={testClassInfo}></ClassCard>
            </div>
            
        </div>
    )
}

export default FindClasses;