import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './pager.css'

const Pager = ({count, page1Count}) => {
  const pages = count / page1Count

  return (
    <div>
      <Pagination>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
      </Pagination>
    </div>
  )
}
export default Pager
