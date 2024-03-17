import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
// Define the interface
interface IconProps {
  bgColor: string;
  hoverColor: string;
  IconComponent: React.ElementType; // Replace with the type of your icons if available
}

// Create an array of objects implementing the interface
const icons: IconProps[] = [
  {
    bgColor: "#1d9bf024",
    hoverColor: "#1d9bf0",
    IconComponent: IoChatbubbleOutline,
  },
  {
    bgColor: "#00ba7c27",
    hoverColor: "#00ba7c",
    IconComponent: AiOutlineRetweet,
  },
  {
    bgColor: "#f9188122",
    hoverColor: "#f91880",
    IconComponent: IoMdHeartEmpty,
  },
  {
    bgColor: "#1c9bef24",
    hoverColor: "#1d9bf0",
    IconComponent: IoBookmarkOutline,
  },
  {
    bgColor: "#1d9bf024",
    hoverColor: "#1d9bf0",
    IconComponent: LuUpload,
  },
];
const FeedCard: React.FC = () => {
  return (
    <div className="flex border-t-2 border-gray-border p-4">
      <div className="w-[10%]">
        <Image
          src="https://avatars.githubusercontent.com/u/81813786?v=4"
          alt="profile"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="w-[90%]">
        <div className="flex justify-between">
          <div className="flex gap-2 px-2">
            <h1 className="font-bold hover:underline cursor-pointer">
              John Doe
            </h1>
            <p className="text-gray-500">@johndoe</p>
          </div>
          <div>
            <IoIosMore className="text-2xl text-gray-500" />
          </div>
        </div>
        <p className="px-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          placeat voluptatum dolor explicabo quasi. Vitae earum natus nobis
          praesentium dolores at ab ad sunt laudantium iusto, nam cum mollitia
          recusandae?
        </p>
        <div className="flex justify-between mt-2">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`text-xl h-fit w-fit hover:bg-[${icon.bgColor}] rounded-full p-2 group transition-all duration-200 cursor-pointer`}
            >
              <icon.IconComponent
                className={`group-hover:text-[${icon.hoverColor}] text-gray-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
