import { RouteObject } from "react-router-dom";
import App from "./App";

//Non-Authenticated Routes
import HomePage from "./pages/non-auth/home";
import SignupPage from "./pages/non-auth/signup";
import SigninPage from "./pages/non-auth/signin";

//Authentciated
import MessagesChannel from "./pages/auth/mchannel";
import NotesChannel from "./pages/auth/nchannel";
import AssignmentChannel from "./pages/auth/achannel";
import CalenderChannel from "./pages/auth/cchannel";
import MainChannel from "./pages/auth/home";
import VideoCallingChannel from "./pages/auth/vcchannel";

const Credentialed: RouteObject[] = [
  {
    path: "/:uid/:cid/message",
    element: <MessagesChannel />,
  },
  {
    path: "/:uid/:cid/note",
    element: <NotesChannel />,
  },
  {
    path: "/:uid/:cid/assignment",
    element: <AssignmentChannel />,
  },
  {
    path: "/:uid/:cid/calender",
    element: <CalenderChannel />,
  },
  {
    path: "/:uid/:cid/main",
    element: <MainChannel />,
  },
  {
    path: "/:uid/:cid/vc",
    element: <VideoCallingChannel />,
  },
];

const NotCredentialed: RouteObject[] = [
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
];

export { Credentialed, NotCredentialed };
