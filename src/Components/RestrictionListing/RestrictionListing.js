import"./RestrictionListing.css"
import { FaTimes } from "react-icons/fa"

function RestrictionListing({displayText, restrictionList, setRestrictionList}) {
    function handleExitClick() {
        setRestrictionList(
            restrictionList.filter(a =>
              a !== displayText
            )
        );
    }

    return (
        <div className="grid-display-restriction">
            <label>{displayText}</label>
            <FaTimes className="x-button" onClick={handleExitClick}></FaTimes>
        </div>
    )
}


export default RestrictionListing