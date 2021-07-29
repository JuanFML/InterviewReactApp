import React, { useState, useEffect } from "react";

const IssuesList = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "http://internal-loadbalancer-backend-1658632040.us-east-2.elb.amazonaws.com"
    ).then((res) => {
      res.json().then((result) => {
        setItems(result);
      });
    });
  }, [filter]);

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
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
};

export default IssuesList;
