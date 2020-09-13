import React, { useState, useEffect } from "react"

const TicketSource = () => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
    ;(function() {
      var el = document.createElement("script")
      el.src = "https://www.ticketsource.co.uk/ticketshop/GMJJH"
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(el, s)
    })()
  }, [])
  return <div></div>
}

export default TicketSource
