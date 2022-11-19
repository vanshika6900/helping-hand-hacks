import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import Modal from 'react-awesome-modal';
import { db } from '../../firebase'

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);
  const [apiData, setApiData] = useState([])
  const [visible, setVisible] = useState(false);
  const [popData, setPopData] = useState('');
  const [selectedData, setSelectedData] = useState()
  useEffect(() => {
    onValue(ref(db, `/`), (snapshot) => {
      let arr = [];
      const data = snapshot.val();
      const x = Object.values(data);
      x.forEach(e => {
        Object.values(e).forEach(a => arr.push(a))
      })
      console.log(arr, 'arr');
      setApiData(arr);
    })
  }, []);



  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  return (
    <div className={Style.collection}>



      <div className={Style.collection_title}>
        <h2>List of Petitions</h2>
        {/* <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div> */}
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;