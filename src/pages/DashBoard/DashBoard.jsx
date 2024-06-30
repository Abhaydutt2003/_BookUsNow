import "./style.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components";
import { useNavigation } from "react-router-dom";//use Navigation to tell if loading

//home page layout
const DashBoard = () => {
  const isLoading = useNavigation().state == "loading";
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <section className="dashboard">
          {/* NavBar here ensures that it is throughout the start of the dashboard */}
          <NavBar></NavBar>
          <Outlet></Outlet>
        </section>
      )}
    </>
  );
};

export default DashBoard;
