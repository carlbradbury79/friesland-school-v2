export const ticketSource = () => {
  var el = document.createElement("script")
  el.src = "https://www.ticketsource.co.uk/ticketshop/GMJJH"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(el, s)
}
