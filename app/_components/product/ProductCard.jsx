import Image from "next/image";

const ProductCard = ({item}) => {
    const array = Array.from({ length:Math.ceil(item.rating.rate) }, (_, index) => index + 1);
  return (
    <div className="card bg-base-100 shadow-xl cursor-pointer ">
    <div className="relative w-full h-60 rounded-xl group overflow-hidden ">
      <Image
      fill
      priority
        src={item.image}
        alt="Shoes" 
        sizes="w-full"
        className="rounded-xl group-hover:scale-125 transition duration-750"
        />
    </div>
    <div className="card-body  p-4">
      <h2 className="card-title text-lg line-clamp-1">
       {item.title}

      </h2>
      <div className="rating">
        {
            array.map((item, i) =>  <input key={i} disabled type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />)
        }



</div>
      <p className="line-clamp-2">{item.description}</p>
      <div className="card-actions justify-end">
        <div className=" font-semibold text-2xl text-orange-600">{item.price} $</div>
      
      </div>
    </div>
  </div>
  )
}

export default ProductCard