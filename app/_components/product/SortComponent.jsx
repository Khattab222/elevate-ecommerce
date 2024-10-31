"use client"
const SortComponent = ({handleSort,sort}) => {
  return (
    <select defaultValue={sort} onChange={handleSort} className="select select-accent w-32  border-orange-500 bg-white dark:bg-gray-700 focus:ring-0 focus:outline-none">
  
    <option disabled value=''  >sort</option>
    <option value='asc'  >ascending</option>
    <option value='desc'>descending</option>
  </select>
  )
}

export default SortComponent