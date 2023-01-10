import { Component } from "react";
import "tachyons"


class PeopleInSpaceFile extends Component{
    constructor(){
        super();
        this.state ={
            people : [],
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then( response => response.json())
        .then( result => this.setState({people : result.people}) )
    }

    openNewTab = (event) => { 
        window.open(event.target, '_blank').focus(); 
        event.preventDefault() 
    };

    render(){
        if (this.state.people){
            return(
                <div>
                    {this.state.people.map((person) => {return <a key={person.name} className ="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href={`https://en.wikipedia.org/wiki/${person.name}`} onClick = {this.openNewTab}>{person.name}</a>})}
                </div>
                )
        }else {
            return(
                <h2>On Loading...</h2>
            )
        }

 
    }
}

export default PeopleInSpaceFile;