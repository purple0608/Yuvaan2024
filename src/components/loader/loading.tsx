import React from "react";

type Props = {};

export default function loader({}: Props) {
  // Dark Mode
  (function () {
    window.addEventListener(
      "click",
      () => document.documentElement.classList.toggle("dark"),
      false,
    );

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const setting: string = localStorage.getItem("color-schema") || "auto";
    if (setting === "dark" || (prefersDark && setting !== "light")) {
      document.documentElement.classList.toggle("dark", true);
    }
  })();

  return (
    <div id="loaderBody">
      <div className="loading-bar" role="presentation" aria-hidden="true">
        <img src="/src/assets/loader/images/loading-bar.png" alt="Loading..." />
      </div>
    </div>
  );
}
