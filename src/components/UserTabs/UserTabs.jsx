import appStyle from "../App.module.css";
import TabList from "../TabList/TabList";

const UserTabs = () => {
  const tabs = ["My recipes", "My favorites", "Followers", "Following"];
  return (
    <section className={appStyle.section}>
      <div className={appStyle.container}>
        <TabList tabs={tabs} />
      </div>
    </section>
  );
};

export default UserTabs;
