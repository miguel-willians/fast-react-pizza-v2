import { useLoaderData } from "react-router-dom";

import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  // Hook que carregará os dados do loader:
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// O loader (nomeado por convenção assim) é usado para fazer a API call. Ele será chamado durante a renderização do Menu ("render as you fetch").
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
