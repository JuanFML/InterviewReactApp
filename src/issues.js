import React, { useState, useEffect } from "react";

const IssuesList = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/facebook/react/issues?per_page=100&&page=${page}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, [page]);
  console.log(page);

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
        <label>
          Page Number:
          <input
            type="number"
            name="Page"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
        </label>
      </form>
      {items.map((item) => {
        if (item.title.includes(filter)) {
          return <li key={item.id}>{item.title}</li>;
        }
        return null;
      })}
    </div>
  );
};

export default IssuesList;
