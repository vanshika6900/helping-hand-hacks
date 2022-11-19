import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
//----IMPORT ICON

import {BsWallet} from "react-icons/bs"
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar, Wallet } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";

// //IMPORT FROM SMART CONTRACT
// import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  //----USESTATE COMPONNTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
      onclick
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  // //SMART CONTRACT SECTION
  // const { currentAccount, connectWallet, openError } = useContext(
  //   NFTMarketplaceContext
  // );

  // Wallet Connection
  const [walletAddress, setWalletAddress] = useState(null);
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Wallet Found");
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            "connected with publickey:",
            response.publicKey.toString()
          );
          window.localStorage.setItem('walletId',response.publicKey.toString())
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Get a phantom wallet")
        console.log("Get a phantom wallet");
      }
    } catch (error) {
      console.error(error);
    }
  };


  const connectWallet = async () => {
    checkIfWalletIsConnected();
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log("connected with public key", response.publicKey);
      setWalletAddress(response.publicKey.toString());  
      window.localStorage.setItem('walletId',response.publicKey.toString())    
    }
  };




  const disconnectWallet = async () => {
    const { solana } = window;
    if (solana) {
      await solana.disconnect();
      setWalletAddress(null);
    }
  };


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <DiJqueryLogo onClick={() => router.push("/")} />
          </div>
          {/* <div className={Style.navbar_container_left_box_input}> */}
            {/* <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div> */}
          {/* </div> */}
        </div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_help}>
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => {router.push('/#petitionRedirect')}}>Petitions</p>
          </div>
          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => {router.push('/#pricingRedirect')}}>Pricing</p>
          </div>
          {/* ABOUT US */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => {router.push('/#aboutUsRedirect')}}>About Us</p>
          </div>

          {/* NOTIFICATION */}
          {/* <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div> */}

          {/* Wallet */}
          <div className={Style.navbar_container_right_notify}>
            <BsWallet
              className={Style.notify}
              onClick={() => connectWallet()}
            />
            {Wallet && <Wallet />}
          </div>

          {/* CREATE BUTTON SECTION */}
          {/* <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div> */}

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              {/* <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              /> */}

              {/* {profile && <Profile currentAccount={currentAccount} />} */}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {/* {openError && <Error />} */}
    </div>
  );
};

export default NavBar;