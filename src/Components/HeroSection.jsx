import { useContext } from "react";
import { InputContext } from "../Store/InputContext";
import ShowResult from "./ShowResult";
const HeroSection = () => {
  const val = useContext(InputContext);

  //   console.log(val);
  return (
    <div>
      <input value={val.identifier} readOnly />
      <ShowResult newcal={val.calculation} />
    </div>
  );
};
export default HeroSection;
