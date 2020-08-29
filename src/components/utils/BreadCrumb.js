import React from "react"
import { Link } from "gatsby"
import { PropTypes } from "prop-types"
import styled from "styled-components"

const BreadCrumbWrapper = styled.div`
  font-size: 1rem;
  margin: 0 0 0 0;
  padding: 0;

  padding: 5px 0;

  .divider {
    margin: 0 5px 0 5px;
  }

  a {
    color: var(--primary);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  span a:hover {
    color: #d22e26;
  }
`

const BreadCrumb = ({ parent }) => {
  // console.log("parent", parent)
  return (
    <div>
      <div>
        <div>
          <BreadCrumbWrapper>
            <Link to="/">
              <span>Home</span>
            </Link>
            <span className="divider">{">"}</span>
            {parent ? (
              <>
                <Link to={`/${parent.slug}`}>
                  <span dangerouslySetInnerHTML={{ __html: parent.title }} />
                </Link>
                <span className="divider">></span>
              </>
            ) : null}
          </BreadCrumbWrapper>
        </div>
      </div>
    </div>
  )
}

BreadCrumb.propTypes = {
  parent: PropTypes.object,
}

export default BreadCrumb
