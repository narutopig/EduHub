import { db } from "@/firebase";
import { collection, getDoc, getDocs } from "@firebase/firestore";
import { NextPageContext } from "next";
import Link from "next/link";
import React from "react";
import { ChannelProps } from "../channel";
import Sidebar from "./Sidebar";

const ServerListLayout = ({ channels, children }: any) => (
  <div className="flex flex-row h-screen">
    <Sidebar />
    <div className="flex-1 bg-gray-200 h-full overflow-y-auto">{children}</div>
  </div>
);

export default ServerListLayout;
