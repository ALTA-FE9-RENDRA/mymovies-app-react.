import React, { Component } from "react";
import Container from "../components/Layout";

class TestEvent extends Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <Container>
        <p className="text-xl">Email :{this.state.email}</p>
        <input
          type="email"
          placeholder="Email"
          className="rounded-2xl p-4 bg-neutral-200 border border-neutral-200"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        {/* <p className="text-xl">Password :{this.state.password.toUpperCase}</p> */}
        <input
          type="password"
          placeholder="Password"
          className="rounded-2xl p-4 bg-neutral-200 border border-neutral-200"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
      </Container>
    );
  }
}

export default TestEvent;
