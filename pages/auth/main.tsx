import ServerListLayout from "@/components/layout/ServerLayout";
import servers from "@/constants/server";

export default function MainPage() {
  return (
    <ServerListLayout servers={servers}>
      <div
        className="flex h-screen justify-center items-center"
        style={{
          flexDirection: "column",
          verticalAlign: "middle",
          border: "2px solid black",
        }}
      >
        <div style={{ margin: "auto" }}>
          <div className="text-center font-bold" style={{ fontSize: "2em" }}>
            Welcome!
          </div>
          <div
            className="text-center mt-10"
            style={{
              fontSize: "1.25em",
              marginTop: "0",
            }}
          >
            Click on one of the tabs on the left to get started and see what's
            going on.
          </div>
        </div>
      </div>
    </ServerListLayout>
  );
}
