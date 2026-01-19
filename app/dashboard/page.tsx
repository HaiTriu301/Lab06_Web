import Link from "next/link";

export default function Home() {
    return (
        <div style={{ padding: 40 }}>
            <h1>Lab 06 – Next.js Practice</h1>

            <ul>
                <li>
                    <Link href="/blog">Exercise 1 – Blog (Pages Router)</Link>
                </li>
                <li>
                    <Link href="/dashboard">Exercise 2–4 – Dashboard</Link>
                </li>
            </ul>
        </div>
    );
}
