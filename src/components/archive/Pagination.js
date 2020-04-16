import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"

const PaginationWrapper = styled.nav`
  text-align: center;
`

const GreyArrow = styled(Link)`
  color: #ddd;
  pointer-events: none;
`

const PageCount = styled.span`
  margin: 10px 20px;
`

const Pagination = ({ catSlug, page, totalPages }) => (
  <>
    <PaginationWrapper>
      {page > 1 ? (
        <Link
          to={`/blog/${catSlug}/${page === 2 ? "" : page - 1}/`}
          className="navBack"
        >
          <FontAwesomeIcon icon={faCaretLeft} />
          Previous
        </Link>
      ) : (
        <GreyArrow>
          <FontAwesomeIcon icon={faCaretLeft} />
          Previous
        </GreyArrow>
      )}
      <PageCount>
        Page {page} of {totalPages}
      </PageCount>
      {page < totalPages ? (
        <Link to={`/blog/${catSlug}/${page + 1}/`}>
          <FontAwesomeIcon icon={faCaretRight} />
          Next
        </Link>
      ) : (
        <GreyArrow>
          <FontAwesomeIcon icon={faCaretRight} />
          Next
        </GreyArrow>
      )}
    </PaginationWrapper>
  </>
)

export default Pagination
