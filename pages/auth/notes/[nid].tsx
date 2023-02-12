import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { db } from "@/firebase";
import { getDoc, doc } from "@firebase/firestore";
import { create } from "domain";
import { NextPageContext } from "next";

export interface NoteProps {
  title: string;
  content: string;
  author_id: string;
  createdAt: string;
  id: string;
}

const HR = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "0.5px solid black",
        marginTop: "0.5em",
        marginBottom: "0.5em",
      }}
    ></div>
  );
};

function Notes({ title, content, author_id, createdAt }: NoteProps) {
  return (
    <ServerListLayout servers={servers}>
      <div className="h-screen" style={{ padding: "2em" }}>
        <div className="font-bold leading-tight" style={{ fontSize: "1.75em" }}>
          {title}
        </div>
        <HR />
        <p>{content}</p>
        <HR />
        <div>
          Posted at{" "}
          {new Date(parseInt(createdAt)).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </ServerListLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { nid } = context.query;

  const ref = await getDoc(doc(db, "/notes/" + nid));

  const data = ref.data() as any;
  return {
    props: { ...data },
  };
}

export default Notes;
