export type Comment = {
  _id: string;
  author: {
    fullName: string;
    _id: string;
  };
  comment: string;
  createdAt: string;
};

export type Like = {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
};

export interface Post {
  _id: string;
  title: string;
  likes: Like[];
  comments: Comment[];
  channel: {
    authRequired: boolean;
    posts: string[];
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  author: {
    role: string;
    emailVerified: boolean;
    banned: boolean;
    isOnline: boolean;
    posts: string[];
    likes: string[];
    comments: string[];
    followers: string[];
    following: string[];
    notifications: string[];
    messages: string[];
    _id: string;
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
