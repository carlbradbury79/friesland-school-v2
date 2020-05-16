// Function to remove everything but the slug from the url

export const getSlug = path => {
  const slugArray = path.split("/").filter(item => item !== "")
  const lastItem = slugArray[slugArray.length - 1]
  return lastItem
}
