import {getPosts} from "@/api/posts";

export async function PostData() {
    const posts = await getPosts();
    return (
        <main>
            <div>{JSON.stringify(posts)}</div>
        </main>
    )
}