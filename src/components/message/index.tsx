export interface MessageProps {
  user_id: string;
  content: string;
  createdAt: string;
  id: string;
}

function Message({ user_id, content, createdAt, id }: MessageProps) {
  return (
    <div className="text-text-base px-3 py-1 w-full bottom-0 text-black text-left">
      <p>{content}</p>
    </div>
  );
}

export default Message;
