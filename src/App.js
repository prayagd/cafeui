import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "name": "Cafe Goodluck",
      "area": "Deccan Gymkhana",
      "city": "Pune",
      "category": ["Restaurant", "Cafe", "Breakfast"],
      "cover-image": "https://content3.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.180309120117.g6p6/catalogue/cafe-good-luck-pune-solapur-road-pune-home-delivery-restaurants-j7ane.jpg",
      "review_rating": {
      "votes": [{
      "rating": 4,
      "votes": 159
      }, {
      "rating": 5,
      "votes": 201
      }, {
      "rating": 2,
      "votes": 49
      }, {
      "rating": 3,
      "votes": 69
      }, {
      "rating": 1,
      "votes": 125
      }],
      "total": 603
      },
      "feature_rating": {
      "place": 3.6,
      "food": 3.5,
      "service": 3.8,
      "staff": 4.1,
      "breakfast": 3.4
      }
      }
  }
  
  render(){
    let sortedVote = this.state["review_rating"].votes.sort((a, b) => b.rating - a.rating)
    let featuresArr = Object.entries(this.state["feature_rating"])
    let totalVotes = this.state["review_rating"].total

    
    return (
            <div id = "resto">
              <div id = "title">
                <h1 id = "header">{this.state.name}</h1>
                <h2 id = "header1">{this.state.area},{this.state.city}</h2>
                <ul id = "categories">
            {this.state.category.map(val => <li id = "cat" key = {Math.random()}><i className = 'fas fa-pizza-slice'/>{val}</li>)}
                </ul>
                <img id = "image" src = {this.state["cover-image"]} alt = "Goodluck cafe image"/>
              </div>
              <div id = "review">
                <Review sortedVotes = {sortedVote} total = {totalVotes}/>
                <Feature features = {featuresArr}/>
                
              </div>
            </div>
    )
  }
  
}




const Review = (props) => {
  let colors = ["#4CAF50", "#2196F3", "#00bcd4", "#ff9800", "#f44336"]
  
  return(<div id = "review-box">
              <div id = "user">User Review</div>
              {props.sortedVotes.map((val, i) => <div  id = "reviews" key = {Math.random()}>
                                       
                                       <div><div>{val.rating}<i className ="fa fa-star"/></div></div>
                                       <div id = "bars"><div id = "container"><div style = {{width: `${(val.votes/props.total) * 100}%`, backgroundColor: colors[i]}}>Votes</div></div></div>
                                       <div>{val.votes}</div>
                                     </div>)}
              <div id = "total">Total votes: {props.total}</div>
          </div>)
}




const Feature = (props) => {
  return (<div id = "features">
                  <div id = "features-header">Features Rating</div>
                  <div id = "features-name" >
                     {props.features.map(val => <div id = "features-title" key = {Math.random()}>
                                              <div>{val[0]}:</div>
                                            </div>)}
                   </div>
                    <div id = "features-value">
                     {props.features.map(val => {if(val[1] > 4){
                        return <div style = {{backgroundColor: "#57E86B", marginTop: 20, padding: 5}}>
                                              <div>{val[1]}</div>
                                            </div>
                      }
                      else{
                        return <div key = {Math.random()} style = {{backgroundColor: "#A9F36A", marginTop: 20, padding: 5}}>
                                              <div>{val[1]}</div>
                                            </div>
                      }})}
                   </div>
                </div>)
}


export default App;
