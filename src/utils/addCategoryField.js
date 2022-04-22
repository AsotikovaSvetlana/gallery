export const addCategoryField = (data) => {
  const result = data.map((item, i) => {
    if (i < 6) {
      return {
        ...item,
        category: 'Category 1'
      }
    } else if (i < 12) {
      return {
        ...item,
        category: 'Category 2'
      }
    } else if (i < 18) {
      return {
        ...item,
        category: 'Category 3'
      }
    } else {
      return {
        ...item,
        category: 'Category 4'
      }
    }
  })

  return result;
}