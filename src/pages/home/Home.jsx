import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homewidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
}
