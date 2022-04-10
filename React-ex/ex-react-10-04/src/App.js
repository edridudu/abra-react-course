import './App.css';
import CapitalizeInput from './Components/CapitalizeInput';
import Counter from './Components/Counter';
import PrintNames from './Components/PrintNames';
import Parent from './Components/ParentAndChild';

function App() {
  let searchText = "";
  const children = [1, 2, 3, 4, 5];
  const persons =
    [
      { firstName: "Elad", lastName: "Zucker" },
      { firstName: "John", lastName: "Doe" }
    ]

  return (
    <div className="App">
      <div className="box">
        <CapitalizeInput startText="kokok text" />
      </div>
      <div className="box">
        <Counter startNumber={5} />
      </div>
      <div className="box">
        <PrintNames persons={persons} searchText={searchText} />
      </div>

      <div>
        <Parent children={children}></Parent>
      </div>
    </div>
  );
}

export default App;
