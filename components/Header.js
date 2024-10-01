import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Header = ({ docs }) => {
  return (
    <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      {/* <!-- Logo  --> */}
      <Logo />
      {/* <!-- Logo Ends --> */}
      {/* <!-- Header --> */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div className="container flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
            <Search />
            <button
              type="button"
              className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            ></button>
            {/* <!-- result card --> */}
          </div>

          {/* <!-- Mobile Responsive Header Starts --> */}

          {/* <!-- Mobile Responsive Header Ends --> */}
        </div>
      </div>
      {/* <!-- Header Ends --> */}

      {/* <!-- sidebar nav --> */}
      <Sidebar docs={docs} />

      {/* <!-- Sidebar nav ends --> */}
    </header>
  );
};

export default Header;
