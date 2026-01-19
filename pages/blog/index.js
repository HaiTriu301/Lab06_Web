import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "data.json");
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

    return {
        props: {
            posts
        }
    };
}

export default function BlogList({ posts }) {
    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
