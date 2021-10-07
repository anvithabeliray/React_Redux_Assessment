import React, { Component } from "react";
import Data from "../../mock/valuesMock";

class CommonDropDown extends Component {
  handleDropdownChange(e) {
    e.preventDefault();
    this.props.handleOnChange(e.target.value);
  }
  render() {
    const dropDownList = this.props.dropDownList;
    return (
      <div>
        <select onChange={(e) => this.handleDropdownChange(e)}>
          {dropDownList.map((x) => {
            return <option>{x.ability.name}</option>;
          })}
        </select>
      </div>
    );
  }
}
CommonDropDown.defaultProps = { Content: Data };
export default CommonDropDown;
