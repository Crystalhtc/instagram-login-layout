import styles from './GetApp.module.css'
import Image from 'next/image'

export default function GetApp() {
    return (
        <div className={styles.getAppContainer}>
            <p>Get the app.</p>
            <div>
            <a href="#" className={styles.appStore}><Image src={'/images/appstore.png'} alt="app store download" width={136} height={40} className ={styles.appStore} priority/></a>
            <a href="#" className={styles.googlePlay}><Image src={'/images/googleplay.png'} alt="google play download" width={136} height={40} className ={styles.googlePlay} priority/></a>
            </div>
        </div>
    )
}