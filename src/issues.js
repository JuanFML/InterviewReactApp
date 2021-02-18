import React, { useState, useEffect } from "react";

const IssuesList = () => {
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  console.log(items);

  return (
    <div>
      {items.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default IssuesList;
