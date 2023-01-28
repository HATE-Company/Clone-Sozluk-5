import { useState } from "react";

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel, initialText = "" }) => {
  const [text, setText] = useState(initialText);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button className="comment-form-button" disabled={!text}>
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className="comment-form-button comment-form-cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
