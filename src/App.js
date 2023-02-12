import { useState, useEffect } from 'react';
import CardList from './components/cardlist/card_list';
import SearchBox from './components/searchbox/search_box';
import './App.css';

/*
We going to add functional components vs class component
*/


const App = () => {

  const [searchMonstersFields, setSearchMonstersFields] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);


  const onSearchChange = (event) => {
    const searcFields = event.target.value.toLocaleLowerCase();
    setSearchMonstersFields(searcFields);
  };

  useEffect(() => {
    console.log("run useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users));
  }, [])

/* This useEffect renders if the is a state change on the search field or the
 * array of filtered monsters.
*/
  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchMonstersFields);
      });
      setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchMonstersFields])


  return(
    <div className="App">
      <h1 className="app-title">Collection of Monsters</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
