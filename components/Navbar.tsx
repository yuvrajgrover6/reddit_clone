import React from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import IconButton from "./IconButton";
import {
  AdsClickRounded,
  LoginRounded,
  MoreHorizSharp,
  WorkOutlineRounded,
} from "@mui/icons-material";
import Dropdown from "./Dropdown";
import { LoginDialog } from "./LoginDialog";
import { getCurrentUser } from "@/lib/session";
import AuthProvider from "./AuthProvider";

const Navbar = async () => {
  // const [dialogOpen, setDialogOpen] = React.useState(false);
  const session = await getCurrentUser();

  return (
    <nav className="flex justify-between align-middle bg-white px-7 py-2 border-b border-1 border-black-500 sticky top-0 z-10">
      <div className="leftNav flex">
        <Image
          className="self-center"
          src={"/text-logo-icon.png"}
          alt="logo"
          width={"116"}
          height={"55"}
        />
      </div>

      <div className="middle w-5/12">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block px-3 py-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-buttonSecondary rounded-full w-full"
              placeholder="Search Reddit"
              required
            />
          </div>
        </form>
      </div>

      {session?.user ? (
        <div>{session.user.email}</div>
      ) : (
        <div className="rightNav flex gap-2">
          <PrimaryButton
            children={
              <div className="flex gap-1 align-middle justify-center">
                <QrCodeScannerRoundedIcon />
                <span className="self-center">Get app</span>
              </div>
            }
            onClick={() => {}}
            isSecondary
          />
          <AuthProvider />

          <PrimaryButton
            children={"Log In"}
            onClick={() => {
              // setDialogOpen(true);
            }}
          />

          {/* <LoginDialog
            open={dialogOpen}
            handleClose={() => {
              setDialogOpen(false);
            }}
          /> */}

          <Dropdown
            icon={<MoreHorizSharp />}
            children={[
              {
                label: "Log In / Sign Up",
                icon: <LoginRounded />,
                onClick: () => {},
              },
              {
                label: "Advertise on Reddit",
                icon: <AdsClickRounded />,
                onClick: () => {},
              },
              {
                label: "Shop Collectible Avatars",
                icon: <WorkOutlineRounded />,
                onClick: () => {},
              },
            ]}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
