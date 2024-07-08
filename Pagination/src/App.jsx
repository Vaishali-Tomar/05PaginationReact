// src/App.js
import React, { useState } from "react";
import { foodData } from "./data";
import Pagination from "./Pagination";

const App = () => {
  const [currectPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const totalPage = Math.ceil(foodData.length / itemPerPage);

  const currentItems = foodData.slice(
    (currectPage - 1) * itemPerPage,
    currectPage * itemPerPage
  );
  return (
    <div>
      <h1>Food List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentpage={currectPage}
        totalPage={totalPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
