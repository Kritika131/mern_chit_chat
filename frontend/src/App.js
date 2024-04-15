import {Button} from "@chakra-ui/button"
import './App.css';
// import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from  "./pages/ChatPage";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
// BrowserRouter
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
    ,
  },
  {
    path: "chat",
    element: <ChatPage/>,
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
      {/* <Button colorSchema="Blue">Button</Button> */}
    </div>
  );
}

export default App;
