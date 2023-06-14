import RestrictionListing from "../../Components/RestrictionListing/RestrictionListing";
import "./RestrictionList.css"
function RestrictionList({restrictionList, setRestrictionList}) {
    
    return (
        <div className="flex-container-restrictions">
            Current Restrictions: 
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