import React from 'react'
import image1 from '../components/EventsForms/killcode.jpg'
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

// import styles from "../pages/forms.css"
import styles from '../components/EventsForms/forms.module.scss'

const Forms = () => {
    return (
        <>
            <div className={styles.content} style={{backgroundImage: `url(${image1.src})`}}>
                
                <div className={styles.navbar3}><Navbar /></div>
                <div className={styles.box}>
                  <h1 className={styles.title}>TAKE DEBAIT V</h1>
                  <div className={styles.timeLine}>
                    <h4>DATE: Time: Venue:</h4>
                    

                  </div>
                  <div className={styles.text}>
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nihil, atque sint nobis dolor doloribus nemo ipsam odio labore, libero accusantium. Rem quam voluptatibus dignissimos doloribus illum minima. Sapiente, hic!
                  </p>
                  </div>
                  
                   <button className={styles.button}>Click here  to register</button>
                </div>
                
               
            </div>
            <Footer />

          

   
        </>
    )
}

export default Forms