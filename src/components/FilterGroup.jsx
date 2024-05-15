export default function FilterGroup({ minRating, onRatingClick, ratings }) {
  return (
    <ul className="flex items-center text-lg">
      {ratings.map((rating, index) => (
        <li
          className={`mr-4 cursor-pointer ${
            minRating === rating && 'border-b-[1px] border-gray-100'
          }`}
          onClick={() => onRatingClick(rating)}
          key={index}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  )
}
