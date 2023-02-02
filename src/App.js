import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonstersFields: '',
    };
    console.log('constructor');
  }

  componentDidMount() {

    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => 
        this.setState(
          () => {
            return {monsters: users};
          },
          () => {
            console.log(this.state);
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
    console.log("render");

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
        {filterMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
