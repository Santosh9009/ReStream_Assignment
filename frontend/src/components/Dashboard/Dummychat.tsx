import dummy from '../../assets/man-avatar.png';
const ChatBubble = () => {
  return (
    <div className="flex items-start space-x-3  bg-transparent rounded-lg shadow-md max-w-md">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img 
          src={dummy} 
          alt="Avatar"
          className="rounded-full border border-gray-600 w-12 h-12"
        />
      </div>

      {/* Chat Content */}
      <div className="flex-1">
        <div className="bg-[#162B4D] rounded-lg p-3">
          <p className="text-gray-200 text-sm">
            This is a dummy chat message to showcase how the chat bubble looks.
          </p>
        </div>
        <span className="text-xs text-gray-400 mt-1 block">10:45 AM</span>
      </div>
    </div>
  );
};

export default ChatBubble;
