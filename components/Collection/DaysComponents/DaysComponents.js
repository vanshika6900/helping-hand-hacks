import React,{useState , useEffect} from "react";
import Image from "next/image";
import { MdPadding, MdVerified } from "react-icons/md";
import Modal from 'react-awesome-modal'
//INTERNAL IMPORT
import { db } from '../../../firebase'
import { onValue, update,ref, set } from "firebase/database";
import Style from "./DaysComponents.module.css";
// import images from "../../../img";
import one from '../../../img/final/1.png'
import two from '../../../img/final/2.png'
import three from '../../../img/final/3.png'
import four from '../../../img/final/4.png'
import five from '../../../img/final/5.png'
import six from '../../../img/final/6.png'
import seven from '../../../img/final/7.png'
import eight from '../../../img/final/8.png'
import nine from '../../../img/final/9.png'

const DaysComponents = ({ el, i ,setVisible , visible, setSelectedData, selectedData}) => {
  const [walletId, setWalletId] = useState(null);
  useEffect(() => {
    let id = window.localStorage.getItem('walletId');
    console.log(id);
    setWalletId(id);
  }, []);

  const selectRandomImage = ()=>{
    const imageArr = [one, two,three,four,five,six,seven,eight,nine]
   return imageArr[Math.floor(Math.random() * 8)]
  }

  const handleVote=(data)=>{
    let c = data.count+1;
    update(ref(db,`${data.walletId}/${data.petitionId}`),{
      count:c,
    });
    data.count = data.count+1;
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
            width={400}
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
              
              <p>
              {el.count}
              </p>
              
            </div>
            


            <div className={Style.daysComponent_box_title_info_price} onClick={()=>{setSelectedData(el); setVisible(true)}}>
              <small>Vote Now</small>
            </div>
          </div>
        </div>
      </div>

    <Modal class="modalcss" visible={visible} width="400" height="300" effect="fadeInUp" backgroundColor="grey" onClickAway={() => setVisible(false)}>
        <div style={{color:'black', padding: 20, backgroundColor:'grey'}}>
          {walletId !==null ? (<h1>WalletId: {walletId} </h1>):(<p>Connect Your Wallet to Vote !</p>)}         
          <h1>{selectedData?.title}</h1>
          <p style={{backgroundColor:"grey"}}>{selectedData?.desc}</p>
          <p style={{backgroundColor:"grey"}}>{selectedData?.count}</p>
            <button onClick={()=>handleVote(selectedData)}>Vote Now </button>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default DaysComponents;