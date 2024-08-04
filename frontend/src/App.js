import {Button} from "@chakra-ui/button"
import './App.css';
// import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from  "./pages/ChatPage";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
// BrowserRouter
import { Route,Switch } from "react-router-dom";
import TestingUI from "./pages/TestUI";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//     ,
//   },
//   {
//     path: "chats",
//     element: <ChatPage/>,
//   },
// ]);

function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/chats" component={ChatPage} />
        <Route path="/" component={HomePage} exact />
        <Route path="/test" component={TestingUI} exact />
      </Switch>

    
    </div>
  );
}

export default App;
