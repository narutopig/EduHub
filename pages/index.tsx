import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Message from "@/components/message";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Message user_id="" content="HELl" createdAt="399" />
      </main>
    </>
  );
}
