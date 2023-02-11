export interface MessageProps {
  user_id: string;
  avatar: string;
  content: string;
  createdAt: string;
  id: string;
}

function Message({ user_id, avatar, content, createdAt, id }: MessageProps) {
  return (
    <div className="text-text-base px-3 py-1 w-full bottom-0 text-black text-left relative float-left">
      <img
        src={avatar}
        className="w-10 h-10 rounded-full absolute top-0 left-0"
      />
      <p className="ml-10">{content}</p>
    </div>
  );
}

export default Message;
