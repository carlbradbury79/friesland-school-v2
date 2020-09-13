import React, { useState, useEffect } from "react"

const TicketSource = () => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])
  return (
    <div>
      {isClient && (
        <>
          {(function() {
            var el = document.createElement("script")
            el.src = "https://www.ticketsource.co.uk/ticketshop/GMJJH"
            var s = document.getElementsByTagName("script")[0]
            s.parentNode.insertBefore(el, s)
          })()}
        </>
      )}
    </div>
  )
}

export default TicketSource
