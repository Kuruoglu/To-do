import React from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends React.Component {
  state = {
    filter: ""
  };
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  changeFilter = name => {
    console.log(name);
  };
  render() {
    const {filter, onFilterChange} = this.props
    const buttons = this.buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button key={name}
          type="button"
          onClick={() => onFilterChange(name)}
          name={name}
          className={`btn ${clazz}`}
        >
          {label}
        </button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
