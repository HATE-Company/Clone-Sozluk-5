
import commentsData from "./Components/Comments/commentsData";

export const getComments = async () => {
    return commentsData;
  };

  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      userId: "1",
      parentId,
      username: "Burcu Erdoğan",
      body: text,
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };