import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      {
        path: "*",
        Component: () => (
          <div
            className="flex flex-col items-center justify-center min-h-screen text-center px-6"
            style={{ backgroundColor: "#080808" }}
          >
            <span
              style={{ color: "#C8F04E", fontSize: "5rem", fontWeight: 800, lineHeight: 1 }}
            >
              404
            </span>
            <p style={{ color: "#666666", marginTop: "12px", marginBottom: "28px" }}>
              This page doesn't exist.
            </p>
            <a
              href="/"
              className="px-6 py-3 rounded-full"
              style={{ backgroundColor: "#C8F04E", color: "#080808", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
            >
              Go Home
            </a>
          </div>
        ),
      },
    ],
  },
]);