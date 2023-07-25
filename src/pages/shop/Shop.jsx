import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from '../collection/Pagination';
import PaginationItemss from '../collection/PaginationItemss';
import './shop.scss'
const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const getData = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products?limit=40&offset=40");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const lastPostIndex = (currentPage * postsPerPage);
  const firstPostIndex = (lastPostIndex - postsPerPage);
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div className='shop'>
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
  )
}

export default Shop