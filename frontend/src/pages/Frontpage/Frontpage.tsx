import { Header } from "../../components/Header/Header";
import { SplitSection } from "../../components/SplitSection/SplitSection";
import "./Frontpage.css";

export const Frontpage = () => {
  return (
    <div className="offset-container">
      <Header />
      <SplitSection />
    </div>
  );
};
