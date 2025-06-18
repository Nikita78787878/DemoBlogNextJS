import {PostInterface} from "@/interfaces/post.interface";
import {API} from "@/app/api";

export async function getPosts(): Promise<PostInterface> {
    const res = await fetch(API.posts);
    return res.json();
}