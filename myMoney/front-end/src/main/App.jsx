import "./App.css";
import "../commom/template/dependencies";
import Header from "../commom/template/header";
import Footer from "../commom/template/footer";
import Messages from '../commom/msg/messages'

import Routes from "./routes";
function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
      <Messages/>
    </div>
  );
}

export default App;
