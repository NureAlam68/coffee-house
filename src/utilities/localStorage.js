import toast from "react-hot-toast";


// get all coffee from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');

    if(all) {
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return []
    }
}


// add a coffee from local storage
const addFavorite = coffee => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id == coffee.id);
    if(isExist){
        return toast.error('Already exist!')
    }
    else{
        favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success("Adding coffee.")
    }
}


// remove coffee from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites();
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success("Removing item successfully.")
}




export {addFavorite, getAllFavorites, removeFavorite}