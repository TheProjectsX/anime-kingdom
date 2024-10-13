"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Dropdown } from "flowbite-react";

const PageNavbar = () => {
    const pathname = usePathname();

    const navRoutes = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/search/anime",
            label: "Anime",
            children: [
                {
                    label: "Trending Now",
                    href: "/search/anime/trending",
                },
                {
                    label: "Anime Schedule",
                    href: "/search/anime/schedule",
                },
                {
                    label: "Popular TV Series",
                    href: "/search/anime/tv-series/popular",
                },
                {
                    label: "Popular Movies",
                    href: "/search/anime/movies/popular",
                },
                {
                    label: "Top Anime",
                    href: "/anime/top",
                },
            ],
        },
        {
            href: "/search/manga",
            label: "Manga",
            children: [
                {
                    label: "Trending Manga",
                    href: "/search/manga/trending",
                },
                {
                    label: "Trending Manhwa",
                    href: "/search/manga/trending/manhwa",
                },
                {
                    label: "Trending Light Novel",
                    href: "/search/manga/trending/light-novel",
                },
                {
                    label: "Top Manga",
                    href: "/search/manga/top",
                },
            ],
        },
        {
            label: "Tools",
            children: [
                {
                    label: "Waifu",
                    href: "/tools/waifu",
                },
                {
                    label: "Image Search",
                    href: "/tools/reverse-search",
                },
                {
                    label: "VA Compare",
                    href: "/tools/compare-va",
                },
            ],
        },
    ];

    return (
        <header className="bg-slate-800 py-2">
            <div className="max-width flex justify-between md:justify-around items-center">
                {" "}
                {/* Temp Logo */}
                <Link href="/">
                    <Image
                        src={"/logo_transparent.png"}
                        alt="Anime Kingdom Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <nav className="dark">
                    <ul className="font-medium rounded-lg space-x-8  mt-0 border-0 [&_.active]:text-blue-400 hidden md:flex">
                        {navRoutes.map((item, idx) => (
                            <li key={idx} className="text-gray-200">
                                {item.children ? (
                                    item.href ? (
                                        <Dropdown
                                            trigger="hover"
                                            label={""}
                                            placement="bottom"
                                            renderTrigger={() => (
                                                <Link
                                                    href={item.href}
                                                    className={`block py-2 px-3 md:p-0 rounded hover:text-blue-400 border-gray-700 active:scale-[.95] transition-[transform] duration-200 ${
                                                        pathname.startsWith(
                                                            item.href
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                            inline
                                        >
                                            {item.children.map((child) => (
                                                <Dropdown.Item
                                                    key={child.href}
                                                    className="p-0"
                                                >
                                                    <Link
                                                        href={child.href}
                                                        className={`hover:text-blue-400 text-gray-200 border-gray-700 active:scale-[.95] transition-[transform] duration-200 py-2 px-4 ${
                                                            pathname ===
                                                            child.href
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown>
                                    ) : (
                                        <Dropdown label={item.label} inline>
                                            {item.children.map((child) => (
                                                <Dropdown.Item
                                                    key={child.href}
                                                    className="p-0"
                                                >
                                                    <Link
                                                        href={child.href}
                                                        className={`hover:text-blue-400 text-gray-200 border-gray-700 active:scale-[.95] transition-[transform] duration-200 py-2 px-4 ${
                                                            pathname.startsWith(
                                                                child.href
                                                            )
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown>
                                    )
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block py-2 px-3 md:p-0 rounded hover:text-blue-400 border-gray-700 active:scale-[.95] transition-[transform] duration-200 ${
                                            pathname === item.href
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        {" "}
                        <Dropdown
                            className="!min-w-40"
                            label=""
                            dismissOnClick={false}
                            renderTrigger={() => (
                                <button className="btn btn-ghost">
                                    <HiOutlineMenuAlt2 className="text-white text-2xl" />
                                </button>
                            )}
                        >
                            {navRoutes.map((item, idx) => (
                                <Dropdown.Item
                                    key={idx}
                                    className="[&_.active]:text-blue-400 font-semibold"
                                >
                                    <Link
                                        href={item.href}
                                        className={
                                            pathname === item.href
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {item.label}
                                    </Link>
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default PageNavbar;
