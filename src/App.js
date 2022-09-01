import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Admin from "./components/Admin";
import { AuthProvider } from "./components/Auth";
import FeatureProducts from "./components/FeatureProducts";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeatureProducts />}></Route>
          <Route path="featured" element={<FeatureProducts />}>
            {" "}
            Featured Products
          </Route>
          <Route path="new" element={<NewProducts />}>
            {" "}
            New Products
          </Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
