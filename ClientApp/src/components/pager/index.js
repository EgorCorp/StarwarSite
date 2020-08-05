import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './pager.css'

const Pager = ({count, page1Count, onClick}) => {
  const pages = count / page1Count
  let pageArr = []
  for (let index = 0; index < pages; index++) {
    pageArr.push(index)
  }
  const handlePageClick = (page) => {
    onClick(page)
  }
  return (
    <div>
      <Pagination>
        {pageArr.map((page) => (
          <Pagination.Item key={page} onClick={() => handlePageClick(page + 1)}>
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}
export default Pager
