import {PostInterface} from "@/interfaces/post.interface";
import {API} from "@/app/api";

export async function getPosts(): Promise<PostInterface[]> {
    const res = await fetch(API.posts);
    return res.json();
}

export async function getPostId(alias: string): Promise<PostInterface | null> {
    const res = await fetch(API.postsById + alias, {
        next: {revalidate: 10}
    });
    console.log('revalidating getPage');
    if (!res.ok) {
        return null;
    }

    return res.json();
}