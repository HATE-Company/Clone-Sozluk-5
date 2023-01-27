
export const getComments = async () => {
    return [
      {
        id: "1",
        userId: "1",
        parentId: null,
        username: "Fourthy",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        userId: "2",
        parentId: null,
        username: "CryptoCurrent",
        imageUrl: "/public/user.png",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        userId: "3",
        parentId: null,
        username: "Prettyflw",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        userId: "4",
        parentId: null,
        username: "Yusuf Aknar",
        body: "glassmorpism is the best thing ever",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      userId: "1",
      parentId,
      username: "Burcu Erdoğan",
      body: text,
      createdAt: new Date().toISOString(),
      imageUrl: null,
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };