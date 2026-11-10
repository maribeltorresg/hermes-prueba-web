import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1 className="text-2xl font-bold">Welcome to TanStack Start</h1>
      <Link to="/products">View Products</Link>
    </main>
  );
}
