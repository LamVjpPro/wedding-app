import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
