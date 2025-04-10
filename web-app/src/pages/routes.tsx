import { Route, createRoutesFromElements } from "react-router-dom";

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import("./login")} />
  </>
);

export default Router;
