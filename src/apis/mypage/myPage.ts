import axios from "axios";

import { getLoginStorage } from "../login/getLoginStorage";

export const myPageUserInfo = async () => {
  const token = getLoginStorage();

  const res = await axios.get("http://13.125.208.179:5007/auth-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const myPageUserInfoUpdate = async (
  name: string,
  favoriteGenre: string,
  favoriteArtist: string
) => {
  try {
    const token = getLoginStorage();

    const customData = JSON.stringify({
      name,
      favoriteGenre,
      favoriteArtist,
    });

    const response = await axios.put(
      "http://13.125.208.179:5007/settings/update-user",
      {
        fullName: customData,
        username: "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("유저 정보 수정 실패:", err);
  }
};

export const myPageUpdatePhoto = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("isCover", "false");
    formData.append("image", file);

    const token = getLoginStorage();

    const res = await axios.post(
      "http://13.125.208.179:5007/users/upload-photo",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("프로필 이미지 업로드 실패:", error);
  }
};

export const logoutUser = async () => {
  try {
    const token = getLoginStorage();

    await axios.post(
      "http://13.125.208.179:5007/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    localStorage.removeItem("app_state");
  } catch (err) {
    console.error("로그아웃 실패:", err);
  }
};

export const updateUserPassword = async (newPassword: string) => {
  try {
    const token = getLoginStorage();

    const res = await axios.put(
      "http://13.125.208.179:5007/settings/update-password",
      {
        password: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("비밀번호 변경 실패:", error);
  }
};

export const deleteUser = async (userId: string) => {
  const token = getLoginStorage();

  try {
    const res = await axios.delete(
      "http://13.125.208.179:5007/users/delete-user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: userId,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.error("회원 탈퇴 실패:", err);
  }
};

export const myPageDeletePhoto = async () => {
  const token = getLoginStorage();
  try {
    const res = await axios.delete(
      "http://13.125.208.179:5007/users/delete-photo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          isCover: false,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error("프로필 이미지 삭제 실패:", err);
  }
};
