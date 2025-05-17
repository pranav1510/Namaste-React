import { useEffect, useState } from "react"

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null)

    useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const menu = await fetch(
			"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=" + resId
		);

		const res = await menu.json();
        console.log(res)
		setResInfo(res.data);
	};

    return resInfo
}

export default useRestaurantMenu