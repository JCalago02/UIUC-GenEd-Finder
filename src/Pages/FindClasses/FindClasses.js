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



const defaultRestrictionList = {
    requirementCategories: Array(16).fill(false),
    minGPA: -2.0,
    maxGPA: -1.0,
    timeSlots: []
}


function FindClasses() {
    const [restrictionList, setRestrictionList] = useState(defaultRestrictionList);
    return (
        <div className="find-classes-page-content">
            <div className="find-classes-header-container">
                <label className="find-classes-header find-classes-bold">Advanced Gen-Ed Search Tool</label>
                <label className="find-classes-header">Input your search filters and hit search to see what Gen-Eds fit best for you!</label>
            </div>
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