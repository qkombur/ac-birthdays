import React from 'react';
import './App.css';
import birthdays from './data/birthdays'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VillagerList villagers={todaysBirthday()} />

      </header>
      <footer>Made with ❤ by @qkombur</footer>
    </div>
  );
}

function VillagerList(props) {
  const villagers = props.villagers;
  const villagersList = villagers.map((villager) =>
    <div key={villager.id}>
      <img src={`https://animal-crossing.com/assets/img/characters/${villager.image}`} alt="" />
      <p>It's <a href={`https://nookipedia.com/wiki/${villager.name}`}>{villager.name}</a>'s birthday, make sure to say hello!</p>
    </div>
  );
  return (
    <div>{villagersList}</div>
  )
}


function getCurrentdate() {
  let day = new Date().getDate();
  let month = new Date().getMonth();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + (month + 1);
  }
  return `${day}-${month}-2000`
}

function todaysBirthday() {
  return birthdays.filter(villager => villager.birthday === getCurrentdate())
}

export default App;
