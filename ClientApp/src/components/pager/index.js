import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import './pager.css'

const Pager = ({count, page1Count, onClick}) => {
  const [selectedPage, setSelectedPage] = useState(0)

  //* расчет количества страниц
  const pages = count / page1Count
  let pageArr = []
  for (let index = 0; index < pages; index++) {
    pageArr.push(index)
  }

  const handlePageClick = (page) => {
    onClick(page)
    setSelectedPage(page - 1)
  }
  return (
    <div>
      <Pagination>
        {pageArr.map((page) => (
          <Pagination.Item
            active={page === selectedPage}
            key={page}
            onClick={() => handlePageClick(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}
export default Pager
