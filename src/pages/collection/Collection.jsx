import React, { useEffect, useState } from "react";
import cover from "../../images/coll_cover.png";
import axios from "axios";

import "./collection.scss";
import PaginationItemss from "./PaginationItemss";
import Pagination from "./Pagination";

const Collection = () => {
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const getData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products?limit=50&offset=50");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    if (category == 0) {
      getData();
    } else {
      axios
        .get(
          `https://api.escuelajs.co/api/v1/categories/${category}/products?limit=30&offset=30`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
  }, [category]);

  const lastPostIndex = (currentPage * postsPerPage);
  const firstPostIndex = (lastPostIndex - postsPerPage);
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="collec">
      <div>
        <img src={cover} alt="" style={{ width: "100%" }} />
      </div>

      <div className="container">
        <div className="left-container">
          <ul>
            <li>
              <div>
                COMPANY
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </li>
            <li>
              <div>
                PRICE
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </li>
            <li>
              <div>
                CATEGORIES
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <div className="upper">
            <h3>Products</h3>
            <select value={category} onChange={handleCategory}>
              <option value={0}>Sort</option>
              <option value={1}>Clothes</option>
              <option value={2}>Electronics</option>
              <option value={3}>Furniture</option>
              <option value={4}>Shoes</option>
              <option value={5}>Others</option>
            </select>
          </div>
          <div className="data">
            {loading ? <p>Loading...</p> : <><PaginationItemss itemsData={currentPosts} />
              <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setcurrentPage}
                currentPage={currentPage}
              /></>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
