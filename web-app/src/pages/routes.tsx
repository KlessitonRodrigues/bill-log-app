import { Route, createRoutesFromElements } from "react-router-dom";

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import("./login")} />
    <Route path="/dashboard" lazy={() => import("./dashboad")} />
    <Route path="/bills/form" lazy={() => import("./bills/form")} />
  </>
);

export default Router;
