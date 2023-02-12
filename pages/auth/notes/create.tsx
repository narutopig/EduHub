import { AuthContext } from "@/components/authprovider";
import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { db } from "@/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { NoteProps } from "./[nid]";

const Create: React.FC<NoteProps> = ({}) => {
  const context = useContext(AuthContext);
  const router = useRouter();

  const [note, setNote] = useState<NoteProps>({
    title: "",
    content: "",
    author_id: "",
    createdAt: "",
    id: "",
  });

  const handleInputChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addDoc(collection(db, "/notes"), {
      ...note,
      author_id: context.user ? context.user.uid : "",
      createdAt: new Date().getTime(),
    }).then((value) => router.push("/auth/notes/" + value.id));
  };

  return (
    <ServerListLayout servers={servers}>
      <div style={{ padding: "2em" }}>
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="w-full border border-gray-400 p-2 rounded-lg h-32"
              id="content"
              name="content"
              value={note.content}
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </ServerListLayout>
  );
};

export default Create;
