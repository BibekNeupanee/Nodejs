import React, { useEffect, useState } from "react";
import AddPublisher from "../AddPublisher/AddPublisher";
import EditPublisher from "../EditPublisher/EditPublisher";
import "./Publisher.scss";

async function deleteBtn(id) {
  const deleteBookType = await fetch(
    `http://localhost:3000/publishers/${id}`,
    {
      method: "DELETE",
    }
  );
  const response = await deleteBookType.json();
  if (response.errorMessage) {
    alert(response.errorMessage);
  } else if (response.successMessage) {
    alert(response.successMessage);
    window.location.reload();
  }
}

function Publisher(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/publishers")
      .then((response) => response.json())
      .then((json) => setData(json.publishers));
  }, []);
  return (
    <section className="publishers">
      <header>
        <span>All Publishers ({Object.keys(data).length})</span>
        <div
          className="btn"
          onClick={(_) => props.onShowPopUp(<AddPublisher />)}
          id="add_books"
          title="Add New Book"
        >
          + Add new
        </div>
      </header>
      <main>
        {data.map((publisher, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{publisher.name}</div>
            </div>
            <div className="right flow">
              <button
                className="btn"
                title="Edit"
                onClick={(_) =>
                  props.onShowPopUp(
                    <EditPublisher publisherId={publisher.id} />
                  )
                }
              >
                Edit
              </button>
              <button
                className="btn"
                title="Delete"
                onClick={(_) => deleteBtn(publisher.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Publisher;
