import { Component } from 'react';
import CardList from './components/cardlist/card_list';
import SearchBox from './components/searchbox/search_box';
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
        <h1 className="app-title">Collection of Monsters</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search"
        />
        <CardList monsters={filterMonsters} />
      </div>
      
    );
  }
}

export default App;
