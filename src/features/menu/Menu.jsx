import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../servers/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();
  return (
    <ul className=" flex flex-col divide-y divide-stone-200 font-pizza">
      {data?.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}
export default Menu;

export async function loader() {
  const response = await getMenu();

  return response;
}
