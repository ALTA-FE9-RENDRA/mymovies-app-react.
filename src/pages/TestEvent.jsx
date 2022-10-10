import React, { useState } from "react";
import Container from "components/Layout";

function TestEvent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <p className="text-xl">Email :{email}</p>
      <input
        type="email"
        placeholder="Email"
        className="rounded-2xl p-4 bg-neutral-200 border border-neutral-200"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p className="text-xl">Password :{password.toUpperCase}</p>
      <input
        type="password"
        placeholder="Password"
        className="rounded-2xl p-4 bg-neutral-200 border border-neutral-200"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </Container>
  );
}

export default TestEvent;
