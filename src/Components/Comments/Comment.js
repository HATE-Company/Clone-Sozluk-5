import CommentForm from "./CommentForm";

const Comment = ({ comment, replies, setActiveComment, activeComment, updateComment, deleteComment, addComment, 
  parentId = null, currentUserId,
}) => {
  const { id, username, body, createdAt, image } = comment;
  const isEditing = activeComment && activeComment.id === id && activeComment.type === "editing";
  const isReplying = activeComment && activeComment.id === id && activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(createdAt) > fiveMinutes;
  const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : id;
  const createdAtDate = new Date(createdAt).toLocaleDateString();

  return (
    <div key={id} className="comment">

        <div className="comment-image-container">
          <img src="/user.png" alt=""  />
        </div>

        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{username}</div>
            <div>{createdAtDate}</div>
          </div>
            {image}

        {!isEditing && <div className="comment-text">{body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={body}
            handleSubmit={(text) => updateComment(text, id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() => setActiveComment({ id, type: "replying" })}
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() => setActiveComment({ id, type: "editing" })}
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Comment;