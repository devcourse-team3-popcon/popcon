import { useEffect, useState } from "react";
import BackButton from "../../../components/common/BackButton";
import BopPostForm from "./BopPostForm";
import { useNavigate, useParams } from "react-router";
import { Post } from "../types/Post";
import { parseBopTitle } from "../../../utils/parseBopTitle";
import { getPost, updatePost } from "../../../utils/post";
import { BopTrack } from "../types/BopTrack";
import StatusModal from "../../../components/common/StatusModal";
import LoadingSpinner from "../../../components/common/LoadingSpinner";

export default function EditBopPost() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [bopTrack, setBopTrack] = useState<BopTrack | null>(null);
  const [bopGenre, setBopGenre] = useState("");
  const [bopText, setBopText] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!postId) return;
        const data = await getPost(postId);
        setPost(data);
      } catch (e) {
        console.error("게시물 정보를 불러오지 못했습니다.", e);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      const parsedBopTitle = parseBopTitle(post.title);
      setBopTrack(parsedBopTitle.track);
      setBopGenre(parsedBopTitle.genre);
      setBopText(parsedBopTitle.text);
    }
  }, [post]);

  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  if (!post)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        게시물 정보를 찾을 수 없습니다.
      </div>
    );

  const channelId = post.channel._id;

  const updatePostHandler = async () => {
    const jsonTitle = {
      track: bopTrack,
      genre: bopGenre,
      text: bopText,
    };
    try {
      const response = await updatePost({
        postId: post._id,
        title: jsonTitle,
        channelId: channelId!,
      });
      if (response.status === 201 || response.status === 200) {
        setShowSuccessModal(true);
      }
    } catch (e) {
      console.error("게시물 수정 실패", e);
    }
  };

  const closeModalHandler = () => {
    setShowSuccessModal(false);
    navigate(-1);
  };

  return (
    <>
      <BackButton />
      <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">숨듣명 수정하기</span>
        <BopPostForm
          bopTrack={bopTrack}
          bopText={bopText}
          bopGenre={bopGenre}
          setBopTrack={setBopTrack}
          setBopText={setBopText}
          setBopGenre={setBopGenre}
        />
        <div className="w-[100%] flex justify-center items-center">
          <button
            type="button"
            className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
            onClick={updatePostHandler}
          >
            수정하기
          </button>
        </div>
      </div>

      {showSuccessModal && (
        <StatusModal message="수정 완료었습니다!" onClose={closeModalHandler} />
      )}
    </>
  );
}
