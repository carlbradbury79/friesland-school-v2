import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"

const PaginationWrapper = styled.nav`
  text-align: center;
  font-size: 1.2rem;

  a {
    padding: 7px 14px;
    background: var(--primary);
    color: #fff;
    margin: 0 2px;
    border: 2px solid #fff;

    :hover {
      background: #fff;
      color: var(--primary);
      border: 2px solid var(--primary);
      text-decoration: none;
    }
  }
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
          {/* <span> Prev</span> */}
        </Link>
      ) : null}

      {page - 2 > 0 && page - 2 !== 1 ? (
        <Link to={`/blog/${catSlug}/${page - 2}/`}>{page - 2}</Link>
      ) : page - 2 === 1 ? (
        <Link to={`/blog/${catSlug}/`}>{page - 2}</Link>
      ) : null}

      {page - 1 > 0 && page - 1 !== 1 ? (
        <Link to={`/blog/${catSlug}/${page - 1}/`}>{page - 1}</Link>
      ) : page - 1 === 1 ? (
        <Link to={`/blog/${catSlug}/`}>{page - 1}</Link>
      ) : null}

      {/* Middle Page of 5 */}
      {page === 1 ? (
        <Link
          style={{
            background: "#fff",
            color: "var(--primary)",
            border: "2px solid var(--primary)",
          }}
          to={`/blog/${catSlug}/`}
        >
          {page}
        </Link>
      ) : (
        <Link
          style={{
            background: "#fff",
            color: "var(--primary)",
            border: "2px solid var(--primary)",
          }}
          to={`/blog/${catSlug}/${page}/`}
        >
          {page}
        </Link>
      )}

      {page + 1 <= totalPages && (
        <Link to={`/blog/${catSlug}/${page + 1}/`}>{page + 1}</Link>
      )}
      {page + 2 <= totalPages && (
        <Link to={`/blog/${catSlug}/${page + 2}/`}>{page + 2}</Link>
      )}

      {page < totalPages ? (
        <Link to={`/blog/${catSlug}/${page + 1}/`}>
          {/* <span>Next </span> */}
          <FontAwesomeIcon icon={faCaretRight} />
        </Link>
      ) : null}
    </PaginationWrapper>
  </>
)

export default Pagination
