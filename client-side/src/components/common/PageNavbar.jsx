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
        },
        {
            href: "/search/manga",
            label: "Manga",
        },
        {
            href: "/about",
            label: "About",
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
                            <li key={idx}>
                                <Link
                                    href={item.href}
                                    className={`block py-2 px-3 md:p-0 rounded hover:text-blue-400 text-gray-200 border-gray-700 active:scale-[.95] transition-[transform] duration-200 ${
                                        pathname === item.href ? "active" : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
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
