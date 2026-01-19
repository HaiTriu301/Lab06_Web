import fs from "fs/promises";
import path from "path";

export default async function UsersPage() {
    const filePath = path.join(process.cwd(), "data", "users.json");
    const file = await fs.readFile(filePath, "utf8");
    const users = JSON.parse(file);

    return (
        <div>
            <h1>Users (Server Component)</h1>
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    );
}
