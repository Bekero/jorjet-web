import { useEffect } from "react"

export function Pagination({ numPages, currentPage, setCurrentPage }) {

    const pageNumbers = [...Array(numPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== numPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <div className="pagination-container">
            <ul className="page-item">
                <li onClick={prevPage}>
                    הקודם
                </li>
                {pageNumbers?.map(pageNum => {
                    return <li key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`page-item ${currentPage === pageNum ? 'active' : ''} `} >
                        {pageNum}
                    </li>
                })}
                <li onClick={nextPage} className="page-item">
                    הבא
                </li>

            </ul>
        </div>
    )
}

