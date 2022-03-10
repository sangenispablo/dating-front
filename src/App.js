import "./App.css";
import { Header } from "./components/Header";
import { DatingCards } from "./components/DatingCards";
import { SwipeButtons } from "./components/SwipeButtons";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
};
