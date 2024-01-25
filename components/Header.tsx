import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center flex justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="DisneyLogo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
