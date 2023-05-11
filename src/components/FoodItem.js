import { IMG_URL} from "../constants";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ name, costForTwo, imageId, id, description, index }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (index) => {
    dispatch(clearCart(index));
  };

  console.log(index);
  return (
    <div key={id} className="w-56 m-2 p-2 bg-orange-100 shadow-md">
      <img className="p-2" src={IMG_URL + id} />
      <h2 className="font-bold text-md">{name}</h2>
      <h2 className="bg-orange-300 font-semibold">price: {costForTwo / 100} rs.</h2>
      <button onClick={() => handleRemoveItem()}>
        Delete
      </button>
      <h3>{index}</h3>
    </div>
  );
};

export default FoodItem;
