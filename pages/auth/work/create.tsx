import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { db } from "@/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { WorkProps } from "./[wid]";

const WorkForm: React.FC<WorkProps> = ({}) => {
  const router = useRouter();
  const [work, setWork] = useState<WorkProps>({
    name: "",
    description: "",
    due: "",
    createdAt: "",
    id: "",
  });

  const handleInputChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setWork({ ...work, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addDoc(collection(db, "/work"), {
      ...work,
      due: new Date(work.due).getTime().toString(),
      createdAt: new Date().getTime(),
    }).then((doc) => router.push("/auth/work/" + doc.id));
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
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="name"
              name="name"
              value={work.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full border border-gray-400 p-2 rounded-lg h-32"
              id="description"
              name="description"
              value={work.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 mb-2"
              htmlFor="due"
            >
              Due
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="date"
              id="due"
              name="due"
              value={work.due}
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

export default WorkForm;
