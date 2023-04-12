import CheckAndLabel from '../CheckAndLabel/CheckAndLabel'
import './CategorySelector.css'

function CategorySelector({selectedCategories, setSelectedCategories}) {
    const headerList = ["Cultural Studies", "US Minority",  "Western Compar. Culture", "Non-Western Culture",
                        "Humanities & the Arts", "Hist. + Philo. Perspectives", "Literature & the Arts", "Soc. & Behavioral Sci.", "Behavioral Science", "Social Science", 
                        "Nat. Science & Tech.", "Physical Sciences", "Life Sciences", "Advanced Composition", "Quantitative Reasoning I", "Quantitative Reasoning II"];
    
    function handleComplexSwitches(id) {
        const newCheckValue = !selectedCategories[id];
        switch(id) {
            case 0:
                editCheckedArr(newCheckValue, [0,1,2,3]);
                break;

            case 4:
                editCheckedArr(newCheckValue, [4,5,6]);
                break;
            
            case 7:
                editCheckedArr(newCheckValue, [7,8,9]);
                break;

            case 10:
                editCheckedArr(newCheckValue, [10,11,12]);
                break;
            default:
                editCheckedArr(newCheckValue, [id]);
                break;
        }
        
        
    }
    function editCheckedArr(value, idArr) {
        console.log("Called with idArr" + idArr)
        const newList = (selectedCategories.map((listValue, listId) => {
            if (idArr.includes(listId)) {
                return value;
            } else {
                return listValue;
            }
        }));
        setSelectedCategories(newList)
    }    

    return (
        <div className='grid-wrapper'>
            {headerList.map((header, i) => (
                <CheckAndLabel id={i} checkedValue={selectedCategories[i]} label={header} updateFunction={handleComplexSwitches}/>
            ))}
        </div>
    )
}

export default CategorySelector

//  0: ACP
// 1: US
// 2: WCC
// 3: NW
// 4: HP
// 5: LA
// 6: Phys
// 7: Li
// 8: Qr
// 9: Beh
// 10: Soc