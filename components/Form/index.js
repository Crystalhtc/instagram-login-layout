import styles from './Form.module.css'
import Image from 'next/image'
import Button from '@/components/Button'
import FacebookButton from '@/components/FacebookButton'

export default function Form() {
    return(
        <>
                <div className={styles.formContainer}>
                    <div className ={styles.logoImage}>
                        <Image src={'/images/Instagram-font.png'} alt="instagram logo" width={177.8} height={100} priority/>
                    </div>
                    <form className={styles.form}>
                            <input 
                                id="userName"
                                className={styles.userNameInput}
                                type="text"
                                required
                                // placeholder="Phone number, username, or email"
                            />
                            <label for="userName" className={styles.userName}>Phone number, username, or email</label>
                            <input 
                                id="password"
                                className={styles.passwordInput}
                                type="password"
                                required
                                // placeholder="Password"
                            />
                            <label for="password"className={styles.password}>Password</label>
                    </form>
                    <Button />
                    <div className={styles.orContainer}>
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <div className={styles.facebookLogin}>
                        <FacebookButton />
                        <a href="#" className={styles.forgotPassword}>Forgot password?</a>
                    </div>
                    
                </div>
        </>
    )
}