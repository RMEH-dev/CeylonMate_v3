import React from "react";
import "../index.css";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";



function NavList() {


  return (
    <List className="flex text-nowrap md:px-0 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-20">
      <Typography
        variant="medium"
        className="font-bold font-[Montserrat] text-c2"
      >
        <Link to="/#">
          <ListItem className="flex items-center justify-between gap-2 py-2 ml-8 ">
            Home
          </ListItem>
        </Link>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="medium"
        className="font-bold font-[Montserrat] text-c2"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Companion</ListItem>
      </Typography>
      <Typography
        variant="medium"
        className="font-bold font-[Montserrat]  text-c2"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Destinations
        </ListItem>
      </Typography>
      <Typography
        variant="medium"
        className="font-bold font-[Montserrat]  text-c2"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="black"
        className="font-bold font-[Montserrat] pl-10  text-c2"
      >
        <div class="pl-5 flex items-center min-h-8 w-[280px] bg-c2 text-c1 rounded-2xl">
          <input
            class="w-35 justify-left border-none bg-transparent py-1 placeholder:text-c1 text-c1 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Search..."
            // onChange={handleChange}
          />
          <button
            type="submit"
            class="m-1 rounded-3xl bg-c1-100 px-2 text-c2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </Typography>
    </List>
  );
}

export function MegaMenuWithHover() {
  return (
    <Navbar className="max-w-[2200px] h-[150px] bg-gradient-to-r from-c3 to-c1 bg-opacity-100 -ml-1 shadow-md shadow-c1  rounded-none">
      <div className="flex items-center text-c2 ">
        <img src="./src/assets/logo.svg" class="w-20 h-20 mx-10 my-5" alt="logo" />
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="px-8 md:px-3 cursor-pointer py-1.5 lg:ml-2 font-extrabold font-[Montserrat]"
        >
          CEYLONMATE
        </Typography>
        <div className="hidden lg:block text-c2">
          <NavList className="text-c2" />
        </div>
      </div>
    </Navbar>
  );
}
