
import '../src/assets/css/App.css';
import DltIssue from "./components/dltBall/DltIssue";

function App() {
  const number=[1,2,3];
  const listItem=number.map((item)=>
    <li issue={item}>   <DltIssue></DltIssue></li>
  );
  return (
    <div className="App">
      <h1>ball</h1>
      <ul>
        {listItem}
      </ul>
    </div>
  );
}
export default App;
