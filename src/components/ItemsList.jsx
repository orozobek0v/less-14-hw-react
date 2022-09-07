import { Component } from "react";
import classes from "./ItemList.module.css"

export class ItemList extends Component {
  render() {
    // console.log("list",this.props.iteme);
    return (
      <>
        {this.props.iteme.map(({ text, key }) => {
          return (
            <div className={classes["block-item"]} key={key}>
              <p>{text}</p>
              <div className={classes["delete-btn"]} onClick={() => this.props.removeItem(key)}>Delete</div>
            </div>
          );
        })}
      </>
    );
  }
}
