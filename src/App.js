import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameLists from "./components/NameLists";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameLists /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Samuel Semudara" mentorName="Victor Ibosiola">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Micheal Olatunji" mentorName="Daniel Olawande">
        <button>Teachings</button>
      </Greet> */}
      {/* <Greet name="Fikunayo Kuforiji" mentorName="Segun Onayinka"></Greet> */}
      {/* <Greet name="Isreal Adetuwo" mentorName="Emmanuel Iren"></Greet>
      <Welcome name="Samuel Semudara" mentorName="Victor Ibosiola"></Welcome> */}
      {/* <Welcome name="Micheal Olatunji" mentorName="Daniel Olawande"></Welcome> */}
      {/* <Welcome name="Fikunayo Kuforiji" mentorName="Segun  Onyainka"></Welcome> */}
      {/* <Welcome name="Isreal Adetuwo" mentorName="Emmanuel Iren"></Welcome> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
