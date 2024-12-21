import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // useRouteError dá acesso ao objeto de erros provido pelo react router
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
