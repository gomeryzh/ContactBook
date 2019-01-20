import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
};

export default class ContactEditor extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          padding: 16,
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow:
            '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        }}
      >
        <input
          style={{ width: '50%', margin: 'auto' }}
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          style={{ width: '50%', margin: 'auto' }}
          type="text"
          placeholder="Phone"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <input
          style={{ width: '50%', margin: 'auto' }}
          type="text"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
