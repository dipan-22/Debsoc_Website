
import React from 'react'
import styles from "../styles/audtion.module.scss";
import style from '../styles/takedebaitregister.module.scss'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import image2 from "../public/Images/takedebait.jpg"

const exp = () => {
  return (
    <div className={styles.content} style={{backgroundImage: `url(${image2.src})`}}>
        <Navbar/>
        <div className={style.fields}>
            <div className={`${styles.formWrap} ${style.formWrap}`}>
            <div className={style.circle}></div> 
            <h1 className={style.leaderName}>Team Leader name</h1>
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            <div className={styles.inputGrp}>
              <div className={styles.question}>Member 1: Phone No</div>
              <input
                type="text"
                // value={data.member_1_number}
                placeholder="Enter your answer"
                // onChange={(e) => {
                //   setData({ ...data, member_1_number: e.target.value });
                // }}
              />
            </div>{" "}
            </div>
            <button className={style.button}>Click here  to register</button>
          
          </div>
        <Footer/>
    </div>
  )
}

export default exp