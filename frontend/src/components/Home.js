import React from "react";
const Home = () => {
    return (
      <div className="home">
        <h2 className="introName">Size Checker</h2>
        <p className="intro1">
         This is an app made strictly for sneakerheads. 
         This app allows you to view and post about how certains sneakers fit,
         are they true to size or do they run a half size small? Here all your
         sizing questions will be answered. You can either fill out 
         the shoe form to make a post and provide valuable info 
         about a specific shoe or read posts made by previous users who
         are sneaker heads just like you! 
         Post some sizing wisdom or gain some sizing wisdom!
        </p>
        <div className="card1"></div>
        <form action="sneakers/create">
            <button className="button1" >TRY NOW</button>
        </form>
      </div>
    );
  };
  
  export default Home;

 
