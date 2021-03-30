import BallIssue from "./BallIssue";
import getDltIssueObj from "../../assets/js/dltDate";


function BallIssueAll(){
    const dltDateObject=getDltIssueObj();
    console.log(dltDateObject);
    console.log(111);
    const dltlistItem=[];
    for (const item in dltDateObject) {
        dltlistItem.push(<BallIssue key={item.toString()}  dltIssue={dltDateObject[item]} dltIssueNo={item}></BallIssue>);
    }
    return (
          <div>
            {dltlistItem}
          </div>
      );
}
export default BallIssueAll;