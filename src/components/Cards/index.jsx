import React from "react";
import "./Cards.css";
import Card from "../Card";

class Cards extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: []
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/Kseniia98/repos')
    .then((response) => {
    return response.json();
    })
    .then((data) => {
      this.setState((state) => ({
        ...state,
        list: data,
      }))
    })
  }

  render(){
    return(
      <div className="cards">
        {this.state.list.map((data) => <Card data={data}/>)}
      </div>
    )
  }
}

export default Cards;