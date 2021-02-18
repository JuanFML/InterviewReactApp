import React, { useState, useEffect } from "react";

const IssuesList = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  console.log(filter);

  return (
    <div>
      <form>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </form>
      {items.map((item) => {
        if (item.title.includes(filter)) {
          console.log(filter);
          console.log(item.title.split(" "));
          return <li key={item.id}>{item.title}</li>;
        }
        return null;
      })}
    </div>
  );
};

export default IssuesList;
