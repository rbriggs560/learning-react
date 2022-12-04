import './App.css';
import BirthdayCard from './component/BirthdayCard';
import data from "./birthday_data";
import { useState } from 'react';


function App() {
  const [birthdays, setBirthdays] = useState(data);
  
  const deleteAllBirthdayReminder = () =>{
    setBirthdays([]);
  }

  return (
    <div className="App">
      <h1 className = "birthday-reminder-title"> <span id = "number-of-birthday">{birthdays.length}</span> Birthdays Today</h1>
      { birthdays.map((item) =>{
        let name = item.name;
        return (
          <BirthdayCard key = {item.id} description = {name} name ={name} birthday = {item.age} image = {item.image} > 
          </BirthdayCard>
        )
      })}
      <button  onClick={deleteAllBirthdayReminder} className = "delete-button"> Clear All</button>
    </div>
  );
}

export default App;
