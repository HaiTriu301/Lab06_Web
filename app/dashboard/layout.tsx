import Link from "next/link";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "200px",
                    background: "#f0f0f0",
                    padding: "20px"
                }}
            >
                <h3>Dashboard</h3>
                <nav>
                    <ul>
                        <li>
                            <Link href="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/users">Users</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main style={{ flex: 1, padding: "20px" }}>
                {children}
            </main>
        </div>
    );
}
