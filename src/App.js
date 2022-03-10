import "./App.css";
import { Header } from "./components/Header";
import { DatingCards } from "./components/DatingCards";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <DatingCards />
    </div>
  );
};
