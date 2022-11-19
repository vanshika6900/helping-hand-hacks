import React from 'react'
import { db } from '../firebase'
import { onValue, ref, set } from "firebase/database";
//INTERNAL IMPORT

// import Style from "../styles/index.module.css";
import { Collection, HeroSection, Subscription } from "../components/componentsindex";
import { NFTCardTwo } from '../collectionPage/collectionIndex';
import Image from "next/image";
// import Subscription from "../components/Subscription/Subscription";
//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

function index() {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];
  // onValue(ref(db,'/'),(snapshot)=>{
  //   const data = snapshot.val();
  //   console.log(data);
  // });

  return (
    <div className={Style.homePage}>
      <HeroSection />
<div id='petitionRedirect'></div>
      <Collection />
      
      <div id='pricingRedirect'></div>
      <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        {/* <div className={Style.Subscription_box_info}>
        
          <h1>💎 Our Pricing</h1>
          <p>Pricing to fit the needs of any companie size.</p>
        </div> */}

        
        {/* <div className={Style.Subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            
            <Subscription key={i + 1} i={1} el={el} />
            
          ))}
        </div> */}
      </div>
    </div>
    
        <div>
        <div id='aboutUsRedirect'></div>
        <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
            Here, on HelpingHands, we use web3 to connect
            individuals from all around the world to launch campaigns, rally supporters, 
            and collaborate with decision-makers to advance solutions for a better future.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
          <video
            src="/vid.mp4"
            // className={classes.vidStyles}
            style={{marginLeft:'160px',}}
            playsInline
            width={400}
            // onClick={(e)=>{e.currentTarget.play()}}
            // onEnded={() => router.push("/navigator")}
            autoPlay
            muted
            // ref={refVid}
          />
          </div>
        </div>
      </div>
      {/* <Brand /> */}
    </div>
        </div>
      {/* <NFTCardTwo/> */}
      {/* <Subscription/> */}
    </div>
  )
}

export default index
