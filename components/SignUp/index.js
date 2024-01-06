import styles from './SignUp.module.css'

export default function SignUp() {
    return (
        <div className={styles.container}>
            <p>
                Don't have an account?
                <a href="#" className={styles.signUp}>Sign up</a>
            </p>      
        </div>
    )
}