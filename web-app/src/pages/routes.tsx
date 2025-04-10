import { Route, createRoutesFromElements } from "react-router-dom";

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import("./login")} />
    <Route path="/dashboard" lazy={() => import("./dashboad")} />
  </>
);

export default Router;
