const ItemCard = ({item}) => {
    return(
        <div className="flex m-1 p-2 bg-gray-100 rounded-lg shadow-md justify-between">
            <div className="flex flex-col w-3/4">
                <span className="font-semibold py-1">{item.card.info.name}</span>
                <span>₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                <span className="text-sm font-medium text-gray-700 p-1">{item.card.info.description}</span>
            </div>
            <div className="flex flex-col w-1/4 items-center relative">
                <img className="size-[100%] m-2 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+ item.card.info.imageId}/>
                <button className="font-semibold text-green-500 bg-white border border-green-500 w-1/3 rounded-md absolute bottom-0">Add</button>
            </div>
        </div>
    )
}

export default ItemCard