export type CommentType = {
  _id: string;
  author: {
    fullName: string;
    _id: string;
  };
  comment: string;
  createdAt: string;
};
