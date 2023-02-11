import { useEffect, useState } from "react";
import Message, { MessageProps } from "@/components/message";
import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { NextPageContext } from "next";
import { db } from "@/firebase";
import { collection, doc, getDoc, onSnapshot } from "@firebase/firestore";
import { useRouter } from "next/router";

export interface ChannelProps {
  name: string;
}

function Channel({ name }: ChannelProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);

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
        setMessages(dataArray);
        window.scrollTo(0, document.body.scrollHeight);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <ServerListLayout servers={servers}>
      <div className="flex h-screen flex-direction-column justify-content-end">
        <h1
          className="w-full font-bold bg-slate-400 fixed top-0 left-0 p-4 shadow-md z-10"
          style={{ position: "sticky", top: 0 }}
        >{`#${name}`}</h1>
        <div
          className="overflow-y-scroll w-full mt-3 flex-grow-1 flex-shrink-0"
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          {messages.map((message) => (
            <div style={{ bottom: 0, width: "100%", overflow: "auto" }}>
              <Message {...message} key={message.id} />
            </div>
          ))}
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
