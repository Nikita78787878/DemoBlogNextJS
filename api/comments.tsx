import { CommentsInterface } from "@/interfaces/Comments.interface";
import {API} from "@/app/api";

export async function getCommentsByPostId(postId: number): Promise<CommentsInterface[]> {
    const res = await fetch(
        API.comments + postId,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Не удалось загрузить комментарии");
    }

    return res.json();
}