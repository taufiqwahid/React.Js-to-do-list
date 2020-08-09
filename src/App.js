// add items to to-do-list
// edit, delete,animate the item in the list

import React, { Component } from "react";
import "./App.scss";
import "./component/ListItems.scss";
import ListItems from "./component/ListItems.js";
import logo from "./images/To do list-bro.png";

//FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  handleInput(e) {
    const value = document.getElementById("value").value;
    this.setState({
      currentItem: {
        text: value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  updateItem(text, key) {
    const items = this.state.items;
    items.forEach((item) => {
      if (item.key === key) {
        items.text = text;
      }
    });

    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <img src={logo} alt="logo" width="100" />
            <h2 className="title">
              to<span className="titleDo">Do</span>
            </h2>

            <input
              id="value"
              type="text"
              placeholder="Enter To Do . . ."
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Tambah</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        ></ListItems>
      </div>
    );
  }
}

export default App;
