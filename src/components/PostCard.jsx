import React, { useContext } from "react";
import { FaRegComment } from "react-icons/fa";
import { BiHeart, BiRepost } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { DotsIcon } from "../assets/icons";
import Avatar from "../assets/images/Avatar.png";
import { Context } from "../context/Context";

const PostCard = ({ item }) => {
  // Access the 'token' from context
  const { token } = useContext(Context);

  // Use phoneNumberOrEmail instead of username, and ensure token and token.phoneNumberOrEmail exist
  const phoneNumberOrEmail = token && token.phoneNumberOrEmail ? token.phoneNumberOrEmail : "Unknown";

  return (
    <li className="px-[25px] pb-[21px] border-b-[2px] border-slate-400">
      <div className="flex items-start gap-[15px]">
        <img src={Avatar} alt="Avatar" />
        <div>
          <strong className="text-[18px] font-bold">{phoneNumberOrEmail}</strong>{" "}
          <span className="text-[16px] text-[#666666]">@{phoneNumberOrEmail.toLowerCase()} · just now</span>
          <p className="text-[16px]">{item.PostItem}</p>
          <div className="flex mt-[22px] max-w-full justify-between">
            <div className="flex items-center gap-1">
              <FaRegComment size={"20px"} className="cursor-pointer" />
              <span className="text-[#536471] font-medium text-[14px]">10</span>
            </div>
            <div className="flex items-center gap-1">
              <BiRepost size={"24px"} className="cursor-pointer" />
              <span className="text-[#536471] font-medium text-[14px]">1</span>
            </div>
            <div className="flex items-center gap-1">
              <BiHeart size={"24px"} className="cursor-pointer" />
              <span className="text-[#536471] font-medium text-[14px]">1</span>
            </div>
            <div className="flex items-center gap-1">
              <LuUpload size={"20px"} className="cursor-pointer" />
              <span className="text-[#536471] font-medium text-[14px]">8</span>
            </div>
            <div className="flex items-center gap-1">
              <FiBarChart2 size={"20px"} className="cursor-pointer" />
              <span className="text-[#536471] font-medium text-[14px]">10</span>
            </div>
          </div>
        </div>
        <span className="mt-1 cursor-pointer">
          <DotsIcon />
        </span>
      </div>
    </li>
  );
};

export default PostCard;
