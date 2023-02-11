import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";

function Notes() {
  return (
    <ServerListLayout servers={servers}>
      <h1>Hello World </h1>
    </ServerListLayout>
  );
}

export default Notes;
