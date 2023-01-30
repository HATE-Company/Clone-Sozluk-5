import React from "react";
import styles from "./styles.module.scss";
import { Reactions } from "../reactions";
import { Button } from "../../button";
import { useComment } from "../useComment";

function Footer() {
  const {
    onEdit,
    onReply,
    onDelete,
    ownByCurrentUser,
  } = useComment();

  return (
    <div className={styles.commentFooter}>
      <Reactions />
      <div className={styles.actionButtons}>
        {ownByCurrentUser ? (
          <>
            <Button onClick={onDelete} variant="warn">
              <img src="./images/icon-delete.svg" aria-hidden="true" height={25} />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src="./images/icon-reply.svg" aria-hidden="true" height={25} />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" aria-hidden="true" height={25} />
            Reply
          </Button>
        )}

      </div>
    </div>
  );
}

export { Footer };
