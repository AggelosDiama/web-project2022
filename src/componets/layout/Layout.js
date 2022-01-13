import classes from "./Layout.module.css";
import SideBar from "./SideBar";

function Layout(props) {
  return (
    <div>
      <SideBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
