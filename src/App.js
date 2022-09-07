import { Component } from "react";
import { ItemList } from "./components/ItemsList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elem: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }
  inputHandler(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const items = this.state.currentItem;
    console.log(items);
    if (items.text !== "") {
      const newItems = [...this.state.elem, items];
      this.setState({
        elem: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  removeItem(key) {
    const deleteItems = this.state.elem.filter((el) => el.key !== key);
    this.setState({
      elem: deleteItems,
    });
  }

  render() {
    // console.log(this.state.elem, "kkkkk");
    return (
      <div className="block">
        <form onSubmit={this.addItem.bind(this)}>
          <input
          className="block-input"
            type="text"
            placeholder="Write Text:"
            value={this.state.currentItem.text}
            onChange={this.inputHandler.bind(this)}
          />
          <button className="block-btn" type="submit">Add</button>
    
        </form>
        <ItemList
            iteme={this.state.elem}
            removeItem={this.removeItem.bind(this)}
          />
      </div>
    );
  }
}

export default App;
