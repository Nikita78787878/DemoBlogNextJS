import {PostProps} from "@/components/Post/Post.props";
import {JSX} from "react";
import PostPicture from './postSvg.svg'
import {Comments, Htag, Like, Tag} from "@/components";
import styles from "./Post.module.css";

export const Post = ({
                         category,
                         point,
                         date,
                         title1,
                         description1,
                         title2,
                         description2,
                         readTime,
                         likeCount = 0,
                         isLiked = false,}: PostProps): JSX.Element => {
    return (

        <div className={styles.Post}>

            <Htag tag="h1Post">{title1}</Htag>

            <div>
                <Tag color="--black-с30">{category}</Tag>
                <Tag color="--black-с20">{point}</Tag>
                <Tag color="--black-с20">{date}</Tag>
                <Tag color="--black-с20">{point}</Tag>
                <Tag color="--black-с20"> {readTime}</Tag>
                <Tag color="--black-с20">{point}</Tag>
                <Like count={likeCount} isActive={isLiked} />
            </div>


            <div className={styles.picture}>
                <PostPicture/>
            </div>

            <div className={styles.text} >
                {description1}
            </div>

            <Htag tag="h2Post">{title2}</Htag>

            <div className={styles.text}>
                {description2}
            </div>

            <Comments/>

        </div>

    )
}