import Image from "next/image";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post(props) {
  return (
    <div>
      {/* Header  */}
      <div>
        <img
          className="rounded-full h-12 w-12 border
        p-1 mr-3"
          src={props.userImg}
        />
        <p>{props.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      {/* Buttons */}
      {/* Captions */}
      {/* Comments */}
      {/* Input Box  */}
    </div>
  );
}

export default Post;
