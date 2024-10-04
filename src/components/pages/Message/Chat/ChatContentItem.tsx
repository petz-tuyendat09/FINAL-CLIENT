interface ChatContentItemProps {
  senderId: string;
}

export default function ChatContentItem({ senderId }: ChatContentItemProps) {
  const chatPosition = senderId === "user1" ? "justify-end" : "justify-left";
  return (
    <div>
      <div className={`flex ${chatPosition}`}>
        <div className="max-w-xl rounded-lg bg-primary px-2 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          voluptatum necessitatibus error. Quis itaque officiis delectus,
          suscipit velit ducimus deserunt, quasi tempore debitis possimus
          consequatur optio. Magni mollitia adipisci eligendi accusantium facere
          modi earum sed enim, nemo sequi tenetur nihil quidem quia at assumenda
          beatae perspiciatis similique aliquid quas voluptas!
        </div>
      </div>
    </div>
  );
}
