export interface MessageProps {
  user_id: string;
  content: string;
  createdAt: string;
}

function Message({ user_id, content, createdAt }: MessageProps) {
  return (
    <div className="rounded-md bg-slate-700 text-text-base px-3 py-1 w-full bottom-0">
      <p>{content}</p>
    </div>
  );
}

export default Message;
