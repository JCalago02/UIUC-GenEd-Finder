import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import './SearchFilterRow.css'
import { useState } from "react";
import CategorySelector from "../../Components/CategorySelector/CategorySelector";
import GpaSelector from "../../Components/GpaSelector/GpaSelector";
import TimeSelectorSection from "../TimeSelectorSection/TimeSelectorSection";


function SearchFilterRow({restrictionList, setRestrictionList}) {
    const [showId, setShowId] = useState(-1); // state that handles which search filter menu is open
    
    const indexToCategory = {
        0: "Cultural Studies",
        1: "US Minority", 
        2: "Western Comparative Culture",
        3: "Non-Western Culture",
        4: "Humanities & the Arts",
        5: "Hist. + Philo. Perspectives",
        6: "Literature & the Arts",
        7: "Soc. & Behavioral Sci.",
        8: "Behavioral Science",
        9: "Social Science",
        10: "Nat. Science & Tech.",
        11: "Physical Sciences",
        12: "Life Sciences",
        13: "Advanced Composition",
        14: "Quantitative Reasoning I",
        15: "Quantitative Reasoning II"
    }

    function HandleGPAChange(newGPABounds) {
        const newMinGPA = newGPABounds[0];
        const newMaxGPA = newGPABounds[1];
        setRestrictionList ({
            ...restrictionList,
            minGPA: newMinGPA,
            maxGPA: newMaxGPA,
        })
    }

    function HandleCategoryChange(newRequirementCategories) {
        setRestrictionList ({
            ...restrictionList,
            requirementCategories: newRequirementCategories
        })
    }

    function HandleTimeslotChange(newTimeslot) {
        const newTimeslotList = restrictionList.timeSlots;
        newTimeslotList.push(newTimeslot);
        setRestrictionList({
            ...restrictionList,
            timeSlots: newTimeslotList
        })
    }
    return (
        <div className="filter-container">
            <div className="flex-container-filter">
                Filters: 
                <SearchFilter 
                    FilterText={"Requirement Category"}
                    id = {1}
                    showId = {showId}
                    changeIdFunction = {setShowId}/>
                <SearchFilter 
                    FilterText={"GPA Range"}
                    id = {2}
                    showId = {showId}
                    changeIdFunction = {setShowId}/>
                <SearchFilter 
                    FilterText={"Timeslot"} 
                    id = {3}
                    showId = {showId}
                    changeIdFunction = {setShowId}/>
            </div>

            {showId === 1 ? (<CategorySelector selectedCategories={restrictionList.requirementCategories} submitSelectedCategories={HandleCategoryChange}></CategorySelector>) : null }
            {showId === 2 ? (<GpaSelector setGPABounds={HandleGPAChange}/>) : null}
            {showId === 3 ? (<TimeSelectorSection setTimeList={HandleTimeslotChange}/>) : null}

        </div>
        
    )
}

export default SearchFilterRow