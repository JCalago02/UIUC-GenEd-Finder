import RestrictionListing from "../../Components/RestrictionListing/RestrictionListing";
import "./RestrictionList.css"
import { useEffect } from "react";
function RestrictionList({restrictionList, setRestrictionList}) {
    
    return (
        <div className="flex-container-restrictions">
            {restrictionList.map((displayText, i) => (
                <RestrictionListing id={i} 
                                    displayText={displayText} 
                                    restrictionList={restrictionList} 
                                    setRestrictionList={setRestrictionList}/>
            ))}
            
        </div>
    )
}


export default RestrictionList;