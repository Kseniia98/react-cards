import React from "react";
import "./Card.css";
import book from "./img/book.png";
import star from "./img/star.png";
import branch from "./img/branch.png"

function Card(props){

  const { data } = props;

  return(

    <div className="card">

      <div className="cardHeader">
        <img className="image" src={book} alt="book" />
        <h3>{data.full_name}</h3>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ex!adipisicing elit. Eos, ex!
      </div>
      
      <div className="cardFooter">
        <div>
          {data.language === null ? "None" : data.language}
        </div>
        <div> 
          <img className="image" src={star} alt="star" /> 
          {data.stargazers_count}
        </div>
        <div> 
          <img className="image" src={branch} alt="branch" /> 
          {data.forks}
        </div>
      </div>
    </div>

  )
}

export default Card;