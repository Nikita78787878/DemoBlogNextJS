import {Htag, Tag} from "@/components";
import styles from "@/components/Comments/Comments.module.css";
import {getCommentsByPostId} from "@/api/comments";


export const Comments = async () => {

    const comments = await getCommentsByPostId(1);

    return (
        <div className={styles.comm}>

            <Htag tag="h2Post">Комментарии</Htag>

            {comments.map((comment) => (

                <div key={comment.id} >

                    <div className={styles.commentHeader}>
                        <div className={styles.tagName}>{comment.name}</div>
                        <Tag color="--black-с30">·</Tag>
                        <div className={styles.tagEmail}>{comment.email}</div>
                    </div>

                    <div className={styles.text}>{comment.body}</div>

                </div>
            ))}
        </div>
    );
};