import { FC } from "react";
import { useParams } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import AdminAllRecipes from "./AdminAllRecipes";
import Footer from "../components/Footer";

const AdminPage: FC = () => {
  const { password } = useParams();

  const realPassword =
    "c53c0a75e979b8b7b4c9ff2e0046e9b98186dffff0e00f45fdb5880caac9cd409f141c8c980f887c3e16a1aa702400b2";

  if (password === realPassword) {
    return (
      <div className="h-full w-full dark:bg-slate-950">
        <AdminNavBar />
        <AdminAllRecipes />

        <Footer />
      </div>
    );
  } else {
    window.location.assign("/");
  }
};

export default AdminPage;
