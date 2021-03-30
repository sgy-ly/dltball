
import React from "react";
import "../../assets/css/dlt.css";
class DltIssue extends React.Component {
    render() {
        return (
            <div className="issue_dlt">
                <IssueRed></IssueRed>
                <IssueBlue></IssueBlue>
            </div>
        )
    }
}
class IssueRed extends React.Component{
    rendreRed(){
        let redArry=[];
        for (let i = 0; i < 36; i++) {
            let cname="ball_red";
            if(i===0){cname="issue_number"}
            let redItem=<div className={cname}>{i===0?"":i}</div>;
            redArry.push(redItem);
        }
        return redArry;
    }
    render(){
        return (
            <div className="issue_red">
                {this.rendreRed()}
            </div>
        )
    }
}
class IssueBlue extends React.Component{
    rendreBlue(){
        let redArry=[];
        for (let i = 0; i < 13; i++) {
            let cname="ball_blue";
            if(i==0){cname="issue_blue_null"}
            let redItem=<div className={cname}>{i===0?"":i}</div>;
            redArry.push(redItem);
        }
        return redArry;
    }
    render(){
        return (
            <div className="issue_blue">
                {this.rendreBlue()}
            </div>
        )
    }
}
export default DltIssue;
