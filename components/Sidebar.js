import Link from "next/link";
import React from "react";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc) => !doc.parent);

  console.log({ roots });

  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  console.log({ nonRoots });

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        <li className="relative">
          <a
            aria-current="page"
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
            // href="/docs"
          >
            <span className="truncate">Introduction</span>
          </a>
          <ul role="list">
            {/* style="opacity: 1" */}
            {roots.map((rootNode) => (
              <li key={rootNode.id} className="relative">
                <Link
                  className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  href={`docs/${rootNode.id}`}
                >
                  <span class="truncate">{rootNode.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
