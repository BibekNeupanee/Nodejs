import React, { useState } from 'react'

async function insertPublisher(publisher) {
    
    await fetch("http://localhost:3000/add-publisher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publisher,
      }),
    });
  }
  
  function AddPublisher() {
    const [publisher, setPublisher] = useState("");
    return (
      <form className="add-publisher">
        <h1>Add Publisher</h1>
        <div className="name">
          <label>Enter Publisher: </label>
          <input
            type="text"
            value={publisher}
            onInput={(e) => setPublisher(e.target.value)}
          />
        </div>
        <button onClick={() => insertPublisher(publisher)}>Add</button>
      </form>
    );
  }
export default AddPublisher