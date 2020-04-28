import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import anchorme from "anchorme"
import { Waypoint } from "react-waypoint"
import { useSpring, config } from "react-spring"
import {
  StyledTwitterFeed,
  TwitterIcon,
  TweetRow,
  TweetBox,
} from "../styles/TwitterFeedStyle"

const APOLLO_QUERY = gql`
  {
    tweets {
      text
      created_at
      id_str
    }
  }
`

function TwitterFeed() {
  const { loading, error, data } = useQuery(APOLLO_QUERY)

  const [isTwitterVisible, toggleTwitterVisible] = useState(false)
  const visibleTwitterAnimation = useSpring({
    opacity: isTwitterVisible ? 1 : 0,
    transform: isTwitterVisible
      ? "translate3d(0,0px,0)"
      : "translate3d(0,150px,0)",
    config: config.molasses,
  })

  return (
    <StyledTwitterFeed style={visibleTwitterAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() => (isTwitterVisible ? null : toggleTwitterVisible(true))}
      />
      <TwitterIcon>
        <h2>
          <a href="https://twitter.com/frieslandschool">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </h2>
        <a href="https://twitter.com/frieslandschool">@FrieslandSchool</a>
      </TwitterIcon>
      <TweetRow>
        {loading && <p>Loading Tweets...</p>}
        {error && console.log("e", error)}
        {/* {console.log("twit", data)} */}
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
