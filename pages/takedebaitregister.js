import React from 'react'
import styles from "../styles/audtion.module.scss";
import style from '../styles/takedebaitregister.module.scss'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";


const  takedebaitregister = () => {
  return (
    <form>
        <div className={style.navbar3}><Navbar /></div>
        <div className={style.wrapper}>
          <div className={style.bgimg}></div>
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
        </div>

        <Footer/>
    </form>
   
  )
}
export default takedebaitregister
