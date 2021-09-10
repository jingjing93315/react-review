// import StatePage from "./pages/learningPage/StatePage";
// import NameForm from "./pages/learningPage/NameForm";
// import CombinePage from "./pages/learningPage/CombinePage";
// import FlavorForm from "./pages/learningPage/FlavorForm";
// import Reservation from "./pages/learningPage/Reservation";
// import ContextPage from "./pages/learningPage/ContextPage";
// import StatePromote from "./pages/learningPage/StatePromote";
// import NumberLstPage from "./pages/learningPage/NumberListPage";
// import DynamicContext from "./pages/learningPage/DynamicContext";
import { CounterPage } from "./pages/learningPage/CounterPage";
// import HookSearchResult from "./pages/learningPage/HookSearchResult";
// import UseContextPage from "./pages/learningPage/UseContextPage";

function App() {
  return (
    <div className="App">
      <CounterPage />
    </div>
  );
}
/**
 * JSX回调函数的this，在js中，class的方法默认不会绑定this,
 * 通常情况下，如果没有在方法后面添加()，应该为这个方法绑定this
 */
export default App;