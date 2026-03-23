import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";

// Force title immediately
document.title = "BySoban";

// Lock the title — prevent any platform override from changing it
const titleEl = document.querySelector("title");
if (titleEl) {
  const observer = new MutationObserver(() => {
    if (document.title !== "BySoban") {
      document.title = "BySoban";
    }
  });
  observer.observe(titleEl, { childList: true });
}

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}