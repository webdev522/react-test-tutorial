import React, { Component } from "react";

class NameForm extends Component {
  static defaultProps = {
    onSubmit: () => console.warn("onSubmit not defined"),
    onChange: () => console.warn("onChange not defined"),
    value: ""
  };

  render() {
    const { onSubmit, onChange, value } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default NameForm;
