import { SlowPost } from "./SlowPost";

export const PostsTab = () => {
  const items = Array.from({ length: 500 }, (_, i) => i);
  return (
    <ul>
      {items.map((index) => (
        <li key={`index_${index}`}>
          <SlowPost index={index} />
        </li>
      ))}
    </ul>
  );
};
