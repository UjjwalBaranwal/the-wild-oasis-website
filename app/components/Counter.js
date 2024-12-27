"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <>
      <p>there are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>
        current count : {count}
      </button>
    </>
  );
}
