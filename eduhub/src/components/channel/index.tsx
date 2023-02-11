import { useEffect, useState } from "react";
import Message, { MessageProps } from "../message";

export interface ChannelProps {
  name: string;
  id: string;
}

function Channel({ name, id }: ChannelProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  // not implemented
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setMessages(res as MessageProps[]));
  }, []);

  return (
    <div className="flex h-screen">
      <h1 className="w-full font-bold">{`#${name}`}</h1>
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
}

export default Channel;
