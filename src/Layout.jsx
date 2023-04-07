import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex flex-row gap-2 h-10 items-center justify-end pr-5 bg-green-400">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
