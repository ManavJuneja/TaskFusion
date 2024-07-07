import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const { auth, chat } = useSelector((store) => store);
  const { id } = useParams();
  const dispatch = useDispatch();
  const scrollAreaRef = useRef(null); // Ref to keep track of the scrollable area

  useEffect(() => {
    dispatch(fetchChatByProject(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (chat.chat?.id) {
      dispatch(fetchChatMessages(chat.chat.id));
    }
  }, [chat.chat?.id, dispatch]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [chat.messages]); // Scroll to bottom whenever messages change

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          senderId: auth.user?.id,
          projectId: id,
          content: message,
        })
      );
      setMessage(""); // Clear the input after sending the message
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Helper function to extract initials from a full name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>

        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col" ref={scrollAreaRef}>
          {chat.messages?.map((item) =>
            item.sender.id !== auth.user.id ? (
              <div className="flex gap-2 mb-2 justify-start" key={item.id}>
                <Avatar>
                  {item.sender.avatarUrl ? (
                    <AvatarImage src={item.sender.avatarUrl} alt={item.sender.fullName} />
                  ) : (
                    <AvatarFallback>{getInitials(item.sender.fullName)}</AvatarFallback>
                  )}
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-ee-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mb-2 justify-end" key={item.id}>
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-es-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
                <Avatar>
                  {auth.user.avatarUrl ? (
                    <AvatarImage src={auth.user.avatarUrl} alt={auth.user.fullName} />
                  ) : (
                    <AvatarFallback>{getInitials(auth.user.fullName)}</AvatarFallback>
                  )}
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>

        <div className="relative p-0">
          <Input
            placeholder="Type a message"
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
