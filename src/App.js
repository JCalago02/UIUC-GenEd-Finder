import './App.css';
import Header from './Components/Header/Header';
import SearchFilterRow from './Sections/SearchFilterRow/SearchFilterRow';
import RestrictionList from './Sections/RestrictionList/RestrictionList'
import { useState } from 'react';
function App() {
  const [restrictionList, setRestrictionList] = useState(["Hello", "There"]);
  return (
    <div className="App">
      <Header></Header>
      <SearchFilterRow/>
      <RestrictionList restrictionList={restrictionList} setRestrictionList={setRestrictionList}></RestrictionList>
    </div>
  );
}

export default App;
