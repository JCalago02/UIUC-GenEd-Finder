import RestrictionListing from "../../Components/RestrictionListing/RestrictionListing";
import "./RestrictionList.css"
function RestrictionList({restrictionList, setRestrictionList}) {
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
    function DetermineIsHeaderCategory(itemBoxIndex) {
        switch(itemBoxIndex) {
            case 0:
            case 4:
            case 7:
            case 10:
                return true;
        }
        return false;
    }
    return (
        <div className="flex-container-restrictions">
            Current Restrictions: 
            {restrictionList.requirementCategories.map((isSelected, i) => (
                isSelected && !DetermineIsHeaderCategory(i) 
                ? <RestrictionListing id={i}
                                      key={i} 
                                      displayText={indexToCategory[i]} 
                                      restrictionList={restrictionList} 
                                      setRestrictionList={setRestrictionList}
                                      type={"requirement"}/>
                : null
            ))
            }
            {restrictionList.minGPA != -2 ?
                <RestrictionListing id = {17}
                                    displayText={"GPA: " + restrictionList.minGPA + "-" + restrictionList.maxGPA}
                                    restrictionList={restrictionList}
                                    setRestrictionList={setRestrictionList}
                                    type={"gpa"}/>
                :
                null
            }
            
        </div>
    )
}


export default RestrictionList;