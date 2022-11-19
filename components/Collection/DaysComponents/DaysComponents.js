import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdPadding, MdVerified } from "react-icons/md";
import Modal from 'react-awesome-modal'
//INTERNAL IMPORT
import { db } from '../../../firebase'
import { onValue, update, ref, set } from "firebase/database";
import Style from "./DaysComponents.module.css";
// import images from "../../../img";
import one from '../../../img/creatorbackground-1.jpeg'
import two from '../../../img/creatorbackground-2.jpeg'
import three from '../../../img/creatorbackground-3.jpeg'
import four from '../../../img/creatorbackground-4.jpg'
import five from '../../../img/creatorbackground-5.jpg'
import six from '../../../img/creatorbackground-6.jpg'
import seven from '../../../img/creatorbackground-7.jpg'
import eight from '../../../img/creatorbackground-8.jpg'
import nine from '../../../img/creatorbackground-9.jpg'

const DaysComponents = ({ el, i, setVisible, visible, setSelectedData, selectedData }) => {
  const [walletId, setWalletId] = useState(null);
  useEffect(() => {
    let id = window.localStorage.getItem('walletId');
    console.log(id);
    setWalletId(id);
  }, []);

  const selectRandomImage = () => {
    const imageArr = [one, two, three, four, five, six, seven, eight, nine]
    return imageArr[Math.floor(Math.random() * 8)]
  }

  const handleVote = (data) => {
    let c = data.count + 1;
    update(ref(db, `${data.walletId}/${data.petitionId}`), {
      count: c,
    });
    data.count = data.count + 1;
    console.log(data);
    setVisible(false)
    // setSelectedData(data);
  }

  return (
    <>

      <div className={Style.daysComponent}>


        {/*  start  */}
        <div className={Style.daysComponent_box}>
          <div className={Style.daysComponent_box_img}>

            <Image
              src={selectRandomImage()}
              className={Style.daysComponent_box_img_img}
              alt="profile background"
              width={1000}
              height={700}
              objectFit="covers"
            />
          </div>

          <div className={Style.daysComponent_box_profile}>

          </div>

          <div className={Style.daysComponent_box_title}>
            <h2>{el.title}</h2>
            <div className={Style.daysComponent_box_title_info}>
              <div className={Style.daysComponent_box_title_info_profile}>
                <p>
                  {el.desc}
                </p>


              </div>
              <p>
                Votes :  {el.count}
              </p>


              <br />
              <div className={Style.daysComponent_box_title_info_price} onClick={() => { setSelectedData(el); setVisible(true) }}>
                <span>Vote Now</span>
              </div>
            </div>
          </div>
        </div>

        <Modal class="modalcss" visible={visible} width="400" height="400" effect="fadeInUp" backgroundColor="grey" onClickAway={() => setVisible(false)}>
          <div style={{ color: 'white', padding: 20, backgroundColor: '#07204b', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
            {walletId !== null ? (<p>WalletId: {walletId} </p>) : (<p>Connect Your Wallet to Vote !</p>)}
            <h1>{selectedData?.title}</h1>
            <p>{selectedData?.desc}</p>
            <p>Votes :{selectedData?.count}</p>
            <button onClick={() => handleVote(selectedData)}>Vote Now </button>
          </div>
        </Modal>
      </div >
    </>
  );
};

export default DaysComponents;