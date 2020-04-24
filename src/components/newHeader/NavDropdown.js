import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
// import NavigationWrapper from "./DropdownStyles"

const NavigationWrapper = styled.nav`
  margin: 5px 0 10px 0; /* just to give some spacing */
  color: #212121;
  /* text-transform: uppercase; */
  /* position: absolute; */
  right: 0px;
  /* font-family: "Teko", Arial, Helvetica, sans-serif; */
  font-size: 1rem;
  /* font-weight: 600; */
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: var(--dark-shade);
  }

  @media (min-width: 992px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  ul li {
    /* display: block; */
    margin: 0 10px 0 0;
    /* float: left; */
    height: 20px; /*this should be the same as your #main-nav height */
    position: relative; /* this is needed in order to position sub menus */
    justify-content: center;

    span {
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: var(--dark-shade);
      cursor: pointer;
      user-select: none;
      font-size: 1rem;
    }

    span {
      margin: 0 0 0 5px;
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: flex; /* show sub menus when hovering over a parent */
    flex-direction: column;
  }

  ul li a:hover {
    color: var(--primary);
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none; /* hide all sub menus from view */
    position: absolute;
    left: 0;
    margin: 0;
    top: 20px; /* this should be the same height as the top level menu -- height + padding + borders */
    padding: 5px 5px 10px 5px;
    text-transform: none;
    background: #fff; /* Old browsers */
    -webkit-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    /* this targets all submenu items */
    width: auto; /* set to the width you want your sub menus to be. This needs to match the value we set below */
    min-width: 170px;
    margin: 10px;
  }

  ul ul li:last-child {
    margin: 10px;
  }

  ul ul li a {
    /* target all sub menu item links */
    padding: 5px 10px; /* give our sub menu links a nice button feel */
    text-decoration: none;
    white-space: nowrap;
    font-size: 1rem;
    color: var(--dark-shade);

    :hover {
      color: var(--light-accent);
    }
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const NavDropdown = () => {
  const menu = useStaticQuery(graphql`
    query newMenuQuery {
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "friesland-v2" } }
      ) {
        totalCount
        edges {
          node {
            items {
              title

              object_slug
              wordpress_children {
                title
                url
                object_slug
              }
            }
            name
          }
        }
      }
    }
  `)

  //   console.log(
  //     "menuID",
  //     menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
  //   )
  return (
    // <div>
    //   {menu.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => {
    //     return <span>{item.title}</span>
    //   })}
    // </div>

    <NavigationWrapper>
      <ul>
        {menu.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          (item, i) => (
            <li key={i}>
              <span>{item.title}</span>
              {item.wordpress_children ? (
                <>
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                  <ul>
                    {item.wordpress_children.map((child, iChild) => (
                      <li key={iChild}>
                        {child.title === "Twitter" ? (
                          <Link
                            to={`/${child.object_slug}`}
                            activeClassName="nav-active"
                          >
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                          </Link>
                        ) : (
                          <a
                            href={`/${child.object_slug}`}
                            // activeClassName="nav-active"
                          >
                            {child.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </li>
          )
        )}
      </ul>
    </NavigationWrapper>
  )
}

export default NavDropdown
