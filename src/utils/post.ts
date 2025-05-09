import { axiosInstance } from "../apis/axiosInstance";

interface CreatePostParams {
  title: object;
  channelId: string;
  image?: File;
}

export const createPost = async ({
  title,
  channelId,
  image,
}: CreatePostParams) => {
  const formData = new FormData();
  formData.append("title", JSON.stringify(title));
  formData.append("channelId", channelId);
  if (image) {
    formData.append("image", image);
  }

  try {
    const res = await axiosInstance.post("/posts/create", formData);
    return res;
  } catch (e) {
    console.error("게시물 생성 실패 : ", e);
    throw e;
  }
};

export const deletePost = async (postId: string) => {
  try {
    await axiosInstance.delete(`/posts/delete`, {
      data: { id: postId },
    });
  } catch (e) {
    console.error("게시물 삭제 실패:", e);
  }
};
