import fs from "fs";
import path from "path";
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), "data", "data.json");
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

    return {
        paths: posts.map(post => ({
            params: { id: post.id }
        })),
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), "data", "data.json");
    const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const post = posts.find(p => p.id === params.id);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post
        }
    };
}

export default function BlogDetail({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
