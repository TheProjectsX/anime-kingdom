"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub } from "react-icons/bs";

const PageFooter = () => {
    return (
        <div className="bg-gray-800 dark">
            <Footer className="max-width" container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="/"
                                src="/logo_transparent.png"
                                alt="Anime Kingdom Logo"
                                name="AniDom"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:gap-6">
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="https://github.com/TheProjextsX">
                                        Github
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="AniDom" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="https://www.facebook.com/projectsx.author/"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="https://github.com/TheProjectsX"
                                icon={BsGithub}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default PageFooter;
