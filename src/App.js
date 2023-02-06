import { Component } from 'react';
import CardList from './components/cardlist/card_list';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonstersFields: '',
    };
  }

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => 
        this.setState(
          () => {
            return {monsters: users};
          }
        )
      );
  }

  onSearchChange = (event) => {

    const searchMonstersFields = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchMonstersFields };
    });
  };

  render() {

    const { monsters, searchMonstersFields } = this.state;
    const { onSearchChange} = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchMonstersFields);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
      
    );
  }
}

export default App;
