import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegUser, FaUserGroup } from "react-icons/fa6";
import { BsSlashSquare } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";

interface sidebarMenuItems {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenu: sidebarMenuItems[] = [
  {
    title: "Home",
    icon: <MdHomeFilled className="text-3xl" />,
  },
  {
    title: "Explore",
    icon: <FiSearch className="text-3xl" />,
  },
  {
    title: "Notifications",
    icon: <RiNotification2Line className="text-3xl" />,
  },
  {
    title: "Messages",
    icon: <HiOutlineEnvelope className="text-3xl" />,
  },
  {
    title: "Grok",
    icon: <BsSlashSquare className="text-3xl" />,
  },
  {
    title: "Lists",
    icon: <RiFileList2Line className="text-3xl" />,
  },
  {
    title: "Bookmark",
    icon: <IoBookmarkOutline className="text-3xl" />,
  },
  {
    title: "Communities",
    icon: <FaUserGroup className="text-3xl" />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter className="text-3xl" />,
  },
  {
    title: "Profile",
    icon: <FaRegUser className="text-3xl" />,
  },
  {
    title: "More",
    icon: <CiCircleMore className="text-3xl" />,
  },
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen max-w-screen-2xl mx-auto">
        <div className="col-span-3 flex justify-start border-r-2 border-gray-border pl-20 pt-1">
          <div className="flex flex-col justify-start items-start">
            <div className="text-3xl h-fit w-fit hover:bg-gray-hover rounded-full p-4 transition-all duration-200 cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="text-2xl pr-16">
              <ul>
                {sidebarMenu.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-4 justify-start items-center hover:bg-gray-hover px-4 py-3 rounded-full transition-all duration-200 cursor-pointer w-fit h-fit"
                  >
                    <span>{item.icon}</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1c9bef] text-white rounded-full p-4 mt-4 cursor-pointer transition-all duration-200 hover:bg-[#1c9befd8] w-full flex justify-center items-center font-bold text-xl">
              Post
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-2 border-gray-border h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
}
