import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

export default function AddPost() {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  return (
    <>
      <div className="flex flex-col w-[1080px] h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">게시물 추가하기</span>
        <form className="flex flex-col gap-8">
          <InputField
            label="게시물 제목 *"
            id="titleInput"
            name="titleInput"
            value={titleInput}
            placeholder="제목을 입력해주세요."
            type="text"
            autoComplete="titleInput"
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            className="w-[100%]"
          />

          <div className="flex gap-4 w-full">
            <TextAreaField
              label="게시물 내용 *"
              id="contentInput"
              name="contentInput"
              autoComplete="contentInput"
              placeholder="내용을 입력해주세요."
              className="flex-grow w-full"
              value={contentInput}
              onChange={(e) => {
                setContentInput(e.target.value);
              }}
            />

            <div className="flex flex-col gap-4 ">
              <label htmlFor="imageInput">이미지 첨부하기</label>
              <input
                type="text"
                id="imageInput"
                name="imageInput"
                autoComplete="imageInput"
                placeholder=".png/.jpg"
                value={imageInput}
                onChange={(e) => {
                  setImageInput(e.target.value);
                }}
                className="border border-[color:var(--white-80)] px-4 rounded-[10px] text-[16px] h-10 focus:outline-none focus:border-[color:var(--primary-200)] h-[240px] w-[240px]"
              />
            </div>
          </div>
        </form>

        <div className="w-[100%] flex justify-center items-center">
          <button className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold">
            저장하기
          </button>
        </div>
      </div>
    </>
  );
}
