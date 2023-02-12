import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChannelProps } from "../channel";

const Sidebar = () => {
  const [channels, setChannels] = useState<ChannelProps[]>([]);

  useEffect(() => {
    async function getData() {
      const channels = collection(db, "/channels");
      setChannels(
        (await getDocs(channels)).docs.map((doc) => {
          return { ...(doc.data() as ChannelProps), id: doc.id };
        })
      );

      console.log(channels);
    }

    getData();
  }, []);
  return (
    <div className="w-64 bg-indigo-600 h-full">
      <ul className="mt-4">
        {channels.map((channel: ChannelProps) => (
          <li key={channel.id} className="p-2">
            <div className="flex items-center ">
              <div className="w-full text-white font-medium px-5 py-2 shadow-md rounded-md hover:bg-indigo-400">
                <Link href={`/auth/channels/${channel.id}`}>
                  {"#"}
                  {channel.name}
                </Link>
                <span className="text-gray-600 font-light px-3 font-italic">
                  Channel
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
