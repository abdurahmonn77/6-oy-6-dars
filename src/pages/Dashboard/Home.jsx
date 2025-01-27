import React, { useState, useEffect } from "react";
import { DarkModeIcon, DotsIcon, GifIcon, ImgIcon } from "../../assets/icons";
import Button from "../../components/Button";
import PostCard from "../../components/PostCard";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("PostLists");
    if (storedPosts) {
      setPostList(JSON.parse(storedPosts));
    }
  }, []);

  function handleSubmitPost(e) {
    e.preventDefault();
    const postInput = e.target.elements.post;
    const newPost = {
      id: postList.length + 1,
      PostItem: postInput.value.trim(),
    };

    if (newPost.PostItem === "") {
      alert("Post cannot be empty!");
      return;
    }

    const updatedPostList = [newPost, ...postList];
    setPostList(updatedPostList);

    localStorage.setItem("PostLists", JSON.stringify(updatedPostList));

    postInput.value = "";
  }

  return (
    <>
      <div className="flex py-6 px-5 items-center justify-between border-b-[2px] border-slate-400">
        <strong className="text-[24px] font-bold">Home</strong>
        <DarkModeIcon />
      </div>
      <div className="px-[20px] pb-[18px] border-b-[2px] border-slate-400">
        <form className="flex flex-col items-start" onSubmit={handleSubmitPost}>
          <div className="flex items-start pt-2 gap-[15px] w-full">
            <img src="src/assets/images/Avatar.png" alt="User avatar" />
            <textarea
              rows={3}
              name="post" // The name must match this value for e.target.elements
              placeholder="What's happening"
              className="resize-none mt-3 placeholder:text-[#828282] w-full outline-0"
            />
          </div>
          <div className="flex pl-[77px] w-full justify-between">
            <div className="flex gap-5 mt-4">
              <label>
                <input type="file" accept=".png, .jpg, .jpeg, .webp, .svg" className="hidden" />
                <ImgIcon />
              </label>
              <GifIcon />
              <GifIcon />
              <GifIcon />
              <GifIcon />
            </div>
            <Button type={"submit"} extraClass={"!w-[108px]"} title={"Tweet"} />
          </div>
        </form>
      </div>
      <ul className="mt-5">
        {postList.map((post) => (
          <PostCard key={post.id} item={post} />
        ))}
      </ul>
    </>
  );
};

export default Home;