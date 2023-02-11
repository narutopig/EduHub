import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";

export default function MainPage() {
  return (
    <ServerListLayout servers={servers}>
      <div></div>
    </ServerListLayout>
  );
}
