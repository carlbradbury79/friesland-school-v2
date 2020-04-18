import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import anchorme from "anchorme"

const APOLLO_QUERY = gql`
  {
    tweets {
      text
      created_at
      id_str
    }
  }
`
const StyledTwitterFeed = styled.div`
  margin: 0 0 5rem 0;
`

const TwitterIcon = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0rem;
  padding: 1rem;

  a {
    font-family: "Cormorant Garamond", serif;
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin: 0;

    a {
      color: var(--primary);
      font-size: 4rem;
    }
  }
`

const TweetRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background: #fff;
  /* border: 1px solid var(--primary); */
`

const TweetBox = styled.div`
  flex: 1;
  height: 100%;
  color: var(--primary);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* text-align: center; */
  margin: 2rem 0px;
  background: #fff;
  font-family: "Open Sans", sans-serif;
  p {
    color: var(--primary);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: #000;
  }

  a {
    color: purple;
  }
`

function TwitterFeed() {
  const { loading, error, data } = useQuery(APOLLO_QUERY)

  return (
    <StyledTwitterFeed>
      <TwitterIcon>
        <h2>
          <a href="https://twitter.com/frieslandschool">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </h2>
        <a href="https://twitter.com/frieslandschool">@frieslandschool</a>
      </TwitterIcon>
      <TweetRow>
        {loading && <p>Loading Tweets...</p>}
        {error && console.log("e", error)}
        {console.log("twit", data)}
        {data &&
          data.tweets.map(t => {
            return (
              <TweetBox key={t.id_str}>
                <span>{t.created_at.split(" ", 3).join(" ")}</span>
                {/* <div dangerouslySetInnerHTML={{ __html: anchorme(t.text) }} /> */}

                <div
                  dangerouslySetInnerHTML={{
                    __html: anchorme({
                      input: t.text,
                      // use some options
                      options: {
                        attributes: {
                          target: "_blank",
                          class: "detected",
                        },
                      },
                      // and extensions
                      extensions: [
                        // an extension for hashtag search
                        {
                          test: /#(\w|_)+/gi,
                          transform: string =>
                            `<a href="https://twitter.com?s=${string.substr(
                              1
                            )}">${string}</a>`,
                        },
                        // an extension for mentions
                        {
                          test: /@(\w|_)+/gi,
                          transform: string =>
                            `<a href="https://twitter.com/${string.substr(
                              1
                            )}">${string}</a>`,
                        },
                      ],
                    }),
                  }}
                />
              </TweetBox>
            )
          })}
      </TweetRow>
    </StyledTwitterFeed>
  )
}

export default TwitterFeed
