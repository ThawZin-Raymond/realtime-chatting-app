import React, { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signing up with:", username, email, password);
  };

  return (
    <div>
      <h1>SignupPagen</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => set }/>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
