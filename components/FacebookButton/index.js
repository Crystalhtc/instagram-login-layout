import styles from './FacebookButton.module.css'
import Image from 'next/image'

export default function FacebookButton() {
    return (
        <button className={styles.facebook} onClick={()=> console.log("Facebook")}>
            <Image src={'/images/facebook.png'} alt="facebook logo" width={16} height={16} className ={styles.facebookLogo} priority/>
            Log in with Facebook
        </button>
    )
}