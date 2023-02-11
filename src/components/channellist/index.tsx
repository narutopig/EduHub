import { useState } from "react";
import { Link } from "react-router-dom";
import { ChannelProps } from "../channel";

export interface ChannelListProps {
  server_id: string;
}

function ChannelList({ server_id }: ChannelListProps) {
  const [channels, setChannels] = useState<ChannelProps[]>([]); // list of channel ID's

  return (
    <div className="flex h-screen">
      {channels.map((channel) => (
        <Link to={`/${server_id}/${channel.id}`}>{`#${channel.name}`}</Link>
      ))}
    </div>
  );
}

export default ChannelList;
