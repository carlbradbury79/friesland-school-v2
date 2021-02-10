import anchorme from "anchorme"

const UseAnchorme = textContent => {
  return anchorme({
    input: textContent,
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
          `<a class="hashtag" href="https://twitter.com?s=${string.substr(
            1
          )}">${string}</a>`,
      },
      // an extension for mentions
      {
        test: /@(\w|_)+/gi,
        transform: string =>
          `<a class="mention" href="https://twitter.com/${string.substr(
            1
          )}">${string}</a>`,
      },
    ],
  })
}

export default UseAnchorme
