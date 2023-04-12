import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import './SearchFilterRow.css'
import { useState } from "react";
import CategorySelector from "../../Components/CategorySelector/CategorySelector";
import GpaSelector from "../../Components/GpaSelector/GpaSelector";
import TimeSelectorSection from "../TimeSelectorSection/TimeSelectorSection";


function SearchFilterRow() {
    const [showId, setShowId] = useState(-1);
    const [selectedCategories, setSelectedCategories] = useState(Array(16).fill(false));
    const [gpaBounds, setGpaBounds] = useState([-2,-1]);
    const [timeList, setTimeList] = useState([])
    return (
        <div className="filter-container">
            <div className="flex-container">
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
            <div className="flex-container">
                {showId === 1 ? ( <CategorySelector selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}></CategorySelector>) : null }
                {showId === 2 ? (<GpaSelector setMinGpa={setGpaBounds}/>) : null}
                {showId === 3 ? (<TimeSelectorSection setTimeList={setTimeList}/>) : null}
            </div>
        </div>
        
    )
}

export default SearchFilterRow