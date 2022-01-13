import classes from "./Sidebar.module.css";

function SideBar() {
  return (
    <div className={classes.side}>
      <div>
        <img src="public\logo.png" />
      </div>

      <div>
        <p>list of locations here</p>
      </div>
    </div>
  );
}

export default SideBar;
