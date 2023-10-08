import React from 'react'
import style from '../styles/takedebaitregister.module.scss'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const  takedebaitregister = () => {
  return (
    <form>
        <div className={style.navbar3}><Navbar /></div>
        <div className={style.Wrapper}>
             <div className={style.bgimg}></div>
             <div className={style.fields}>
             <div className={style.header}>
             <div className={style.text}></div>
             <div className={style.underline}></div>
             </div>
                
             <div className={style.input}>
                
             </div>
             </div>
             

        </div>
        <Footer/>
    </form>
   
  )
}
export default takedebaitregister
