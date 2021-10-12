import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestion, setsuggestion] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
    setsuggestion(suggestions);
  }, []);
  return (
    <div
      className="flex space-x-2 p-6  bg-white mt-6 border-gray-200
    border rpounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-transparent"
    >
      {suggestion.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
