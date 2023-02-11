import { useContext, useEffect, useRef, useState } from "react";
import Message, { MessageProps } from "@/components/message";
import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { NextPageContext } from "next";
import { db } from "@/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from "@firebase/firestore";
import { useRouter } from "next/router";
import { AuthContext } from "@/components/authprovider";

export interface ChannelProps {
  name: string;
}

function Channel({ name }: ChannelProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [message, setMessage] = useState("");
  const context = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add code here to send the message to a server or add it to a chat list

    addDoc(collection(db, "/channels/" + cid + "/messages"), {
      content: message,
      createdAt: new Date().getTime(),
      user_id: context.user?.uid,
      avatar: context.user ? context.user.photoURL : undefined,
    });

    setMessage("");
  };

  const router = useRouter();

  const { cid } = router.query;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `/channels/${cid}/messages`),
      (snapshot) => {
        const dataArray = snapshot.docs.map((doc) => ({
          ...(doc.data() as MessageProps),
          id: doc.id,
          avatar:
            doc.data().avatar ??
            "http://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8-300x300.jpg",
        }));
        setMessages(
          dataArray.sort(
            (a, b) => parseInt(a.createdAt) - parseInt(b.createdAt)
          )
        );
        window.scrollTo(0, document.body.scrollHeight);
      }
    );

    return () => unsubscribe();
  }, []);

  const InputBox = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
      inputRef.current?.focus();
    };

    return (
      <form onSubmit={handleSubmit} className="px-3 py-2 w-full">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter message here"
          className="px-2 py-1 border-2 border-gray-500"
          ref={inputRef}
        />
        <button type="submit" className="px-3 py-2 ml-2 bg-grey-500 text-white">
          Send
        </button>
      </form>
    );
  };

  return (
    <ServerListLayout servers={servers}>
      <div
        className="flex h-screen flex-direction-column justify-content-end"
        style={{ border: "2px solid black" }}
      >
        <h1
          className="w-full font-bold bg-slate-400 fixed top-0 left-0 p-4 shadow-md z-10"
          style={{ position: "sticky", top: 0 }}
        >{`#${name}`}</h1>
        <div
          className="overflow-y-scroll w-full mt-3 flex-grow-1 flex-shrink-0"
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            width: "100%",
            overflow: "auto",
          }}
        >
          {messages.map((message) => (
            <Message {...message} key={message.id} />
          ))}
          <InputBox />
        </div>
      </div>
    </ServerListLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { cid } = context.query;

  const ref = await getDoc(doc(db, "/channels/" + cid));

  const data = ref.data() as any;
  return {
    props: {
      name: data.name,
    },
  };
}

export default Channel;
