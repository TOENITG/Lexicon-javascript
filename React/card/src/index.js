import React from 'react';
import ReactDOM from 'react-dom';
import PersonCard from "./PersonCard";
import PersonCardDetails from "./PersonCardDetails";

import faker from "faker";

const createAllCards = () => {
  let cardArray = [];
  for (let i=0; i<10;i++) {
    let firstName= faker.name.firstName();
    let lastName = faker.name.lastName();
    let name = `${firstName} ${lastName}`;
    let city = faker.address.city();
    let companyName = faker.company.companyName();
    let workTitle = faker.name.jobTitle();
    cardArray.push(
  <PersonCard key={i}>
      <PersonCardDetails 
        key={i}
        name={name}
        firstName = {firstName}
        image={faker.image.avatar()}
        joined={faker.date.past().getFullYear()}
        city={city}
        companyName = {companyName}
        workTitle = {workTitle}
        />
    </PersonCard>
    );
  
  }
    console.log("Aray:", cardArray);
    return cardArray
}

const App = () => {
  return (
    <div className= "base">
      <div className="ui link cards">
        {createAllCards()}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root "));