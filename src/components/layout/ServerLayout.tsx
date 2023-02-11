interface ServerListLayoutProps {
  servers: Server[];
  children: any;
}

interface Server {
  name: string;
  icon: string;
}

const ServerListLayout = ({ servers, children }: ServerListLayoutProps) => (
  <div className="flex flex-row h-screen">
    <div className="w-64 bg-indigo-600 h-full">
      <ul className="mt-4">
        {servers.map((server) => (
          <li key={server.name} className="p-2">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <img src={server.icon} alt={server.name} />
              </div>
              <div className="text-white font-medium">{server.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 bg-gray-200 h-full overflow-y-auto p-4">
      {children}
    </div>
  </div>
);

export default ServerListLayout;
