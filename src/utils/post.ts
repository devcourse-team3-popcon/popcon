import { axiosInstance } from "../apis/axiosInstance";

export const deletePost = async (postId: string) => {
  try {
    await axiosInstance.delete(`/posts/delete`, {
      data: { id: postId },
    });
  } catch (e) {
    console.error("게시물 삭제 실패:", e);
  }
};
