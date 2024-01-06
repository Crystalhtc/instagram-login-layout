import styles from './Button.module.css'

export default function Button() {
    return (
        <button className={styles.login} onClick={()=> console.log("Logged In")}>
            Log in
        </button>
    )
}