import { useStaticQuery, graphql } from "gatsby"

const MenuItems = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "friesland-v2" }) {
        menuItems {
          nodes {
            key: id
            parentId
            title: label
            url
          }
        }
      }
    }
  `)

  const flatListToHierarchical = (
    data = wpMenu.menuItems.nodes,
    { idKey = "key", parentKey = "parentId", childrenKey = "children" } = {}
  ) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }

  // console.log("menu shiz", wpMenu.menuItems.nodes)
  // console.log("heir", flatListToHierarchical())
  const heirarchialMenu = flatListToHierarchical()

  // return wpMenu
  return heirarchialMenu
}

export default MenuItems
