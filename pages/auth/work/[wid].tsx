import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";
import { db } from "@/firebase";
import { getDoc, doc } from "@firebase/firestore";
import { NextPageContext } from "next";

export interface WorkProps {
  name: string;
  description: string;
  due: string;
  createdAt: string;
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

function Work({ name, description, due, createdAt }: WorkProps) {
  return (
    <ServerListLayout servers={servers}>
      <div className="h-screen" style={{ padding: "2em" }}>
        <div className="font-bold leading-tight" style={{ fontSize: "1.75em" }}>
          {name}
        </div>
        <HR />
        <div className="font-bold">
          Due at{" "}
          {new Date(parseInt(due)).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <HR />
        <p>{description}</p>
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
  const { wid } = context.query;

  const ref = await getDoc(doc(db, "/work/" + wid));

  const data = ref.data() as any;
  return {
    props: { ...data },
  };
}

export default Work;
