import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import UseAnchorme from "./UseAnchorme"
import { Waypoint } from "react-waypoint"
import { useSpring, config } from "react-spring"
import Moment from "react-moment"
import {
  StyledTwitterFeed,
  TwitterIcon,
  TweetRow,
  TweetBox,
  TwitterImages,
} from "../styles/TwitterFeedStyle"
import TwitterPic from "./TwitterPic"

const APOLLO_QUERY = gql`
  {
    tweets {
      full_text
      created_at
      id_str
      entities {
        media {
          media_url_https
        }
      }
      extended_entities {
        media {
          media_url_https
          type
          id_str
        }
      }
    }
  }
`

function TwitterFeed({ getTwitterPic }) {
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
        {data &&
          data.tweets.map(t => {
            // console.log(t)
            const linkToTwitter = t.full_text
              .trim()
              .split(" ")
              .splice(-1)
            const full_text = t.full_text.substring(
              0,
              t.full_text.lastIndexOf(" ")
            )

            return (
              <TweetBox key={t.id_str}>
                {/* <span>{t.created_at.split(" ", 3).join(" ")}</span> */}
                <span>
                  Tweeted <Moment fromNow>{t.created_at}</Moment>
                </span>
                <TwitterImages>
                  {t.extended_entities &&
                    t.extended_entities.media &&
                    t.extended_entities.media.map(entity => {
                      if (entity.type === "photo") {
                        return (
                          <TwitterPic
                            key={entity.id_str}
                            src={entity.media_url_https}
                            getTwitterPic={getTwitterPic}
                          />
                        )
                      } else {
                        return null
                      }
                    })}
                </TwitterImages>
                <div
                  style={{ marginBottom: "1rem" }}
                  dangerouslySetInnerHTML={{
                    __html: UseAnchorme(full_text),
                  }}
                />
                <a
                  href={linkToTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={{ color: "var(--lightBlue)" }}
                    icon={faTwitter}
                  />
                  Read on Twitter
                </a>
              </TweetBox>
            )
          })}
      </TweetRow>
    </StyledTwitterFeed>
  )
}

export default TwitterFeed
