import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  // useNavigation: Um hook que "monitora" se um componente foi ou não renderizado (state: idle ou loading)
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* Responsável por renderizar o conteúdo das nested routes: */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
