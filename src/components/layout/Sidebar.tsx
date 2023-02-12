import { db } from "@/firebase";
import { collection, getDocs } from "@firebase/firestore";
import Link from "next/link";
import { NoteProps } from "pages/auth/notes/[nid]";
import { WorkProps } from "pages/auth/work/[wid]";
import { useEffect, useState } from "react";
import { ChannelProps } from "../channel";

const Sidebar = () => {
  const [channels, setChannels] = useState<ChannelProps[]>([]);
  const [work, setWork] = useState<WorkProps[]>([]);
  const [notes, setNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    async function getData() {
      const channels = collection(db, "/channels");
      setChannels(
        (await getDocs(channels)).docs.map((doc) => {
          return { ...(doc.data() as ChannelProps), id: doc.id };
        })
      );

      const work = collection(db, "/work");

      setWork(
        (await getDocs(work)).docs
          .map((doc) => {
            return { ...(doc.data() as WorkProps), id: doc.id };
          })
          .sort((a, b) => parseInt(a.due) - parseInt(b.due))
      );

      const notes = collection(db, "/notes");

      setNotes(
        (await getDocs(notes)).docs.map((doc) => {
          return { ...(doc.data() as NoteProps), id: doc.id };
        })
      );
    }

    getData();
  }, []);

  return (
    <div className="w-64 bg-indigo-600 h-full">
      <div className="text-white font-bold m-4">
        Channels <Link href="/auth/channels/create">+</Link>
      </div>
      <ul className="mt-4">
        {channels.map((channel: ChannelProps) => (
          <li key={channel.id} className="p-2">
            <div className="flex items-center">
              <div
                className="w-full text-white font-medium px-5 py-2 shadow-md rounded-md hover:bg-indigo-400"
                style={{ border: "1px solid black" }}
              >
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
      <div className="text-white font-bold m-4">
        Assignments <Link href="/auth/work/create">+</Link>
      </div>
      <ul className="mt-4">
        {work.map((w: WorkProps) => (
          <li key={w.id} className="p-2">
            <div className="flex items-center">
              <div
                className="w-full text-white font-medium px-5 py-2 shadow-md rounded-md hover:bg-indigo-400"
                style={{ border: "1px solid black" }}
              >
                <Link href={`/auth/work/${w.id}`}>{w.name}</Link>
                <div className="text-slate-400">
                  Due{" "}
                  {new Date(parseInt(w.due)).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-white font-bold m-4">
        Notes <Link href="/auth/notes/create">+</Link>
      </div>
      <ul className="mt-4">
        {notes.map((note: NoteProps) => (
          <li key={note.id} className="p-2">
            <div className="flex items-center">
              <div
                className="w-full text-white font-medium px-5 py-2 shadow-md rounded-md hover:bg-indigo-400"
                style={{ border: "1px solid black" }}
              >
                <Link href={`/auth/notes/${note.id}`}>{note.title}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
