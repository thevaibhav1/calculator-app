import HeroSection from "./Components/HeroSection";
import Number from "./Components/Number";
import InputContextProvider from "./Store/InputContextProvider";
function App() {
  return (
    <InputContextProvider>
      <HeroSection />
      <Number />
    </InputContextProvider>
  );
}

export default App;
