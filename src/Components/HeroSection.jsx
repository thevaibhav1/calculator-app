import { useContext } from "react";
import { InputContext } from "../Store/InputContext";
import ShowResult from "./ShowResult";
import "./HeroSection.css";
const HeroSection = () => {
  const val = useContext(InputContext);

  //   console.log(val);
  return (
    <>
      <div className="input-block">
        <input value={val.identifier} readOnly />
      </div>
      <ShowResult newcal={val.calculation} />
    </>
  );
};
export default HeroSection;
