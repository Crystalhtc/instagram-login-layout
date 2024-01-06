import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <a href="#" className={styles.hover}>Meta</a>
                <a href="#" className={styles.hover}>About</a>
                <a href="#" className={styles.hover}>Blog</a>
                <a href="#">Jobs</a>
                <a href="#" className={styles.hover}>Help</a>
                <a href="#" className={styles.hover}>API</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Locations</a>
                <a href="#">Instagram Lite</a>
                <a href="#" className={styles.hover}>Threads</a>
                <a href="#">Contact Uploading & Non-Users</a>
                <a href="#" className={styles.hover}>Meta Verified</a>
            </div>
            <div className={styles.copyright}>
                <form>
                    <select className={styles.languageSelect}>
                        <option>Afrikaans</option>
                        <option>العربية</option>
                        <option>Čeština</option>
                        <option>Dansk</option>
                        <option>Deutsch</option>
                        <option>Ελληνικά</option>
                        <option selected>English</option>
                        <option>English (UK)</option>
                        <option>Español (España)</option>
                        <option>Español</option>
                        <option>فارسی</option>
                        <option >Suomi</option>
                        <option>Français</option>
                        <option>עברית</option>
                        <option>Bahasa Indonesia</option>
                        <option>Italiano</option>
                        <option>日本語</option>
                        <option>한국어</option>
                        <option>Bahasa Melayu</option>
                        <option>Norsk</option>
                        <option>Nederlands</option>
                        <option>Polski</option>
                        <option>Português (Brasil)</option>
                        <option>Português (Portugal)</option>
                        <option>Русский</option>
                        <option>Svenska</option>
                        <option>ภาษาไทย</option>
                        <option>Filipino</option>
                        <option>Türkçe</option>
                        <option>中文(简体)</option>
                        <option>中文(台灣)</option>
                        <option>বাংলা</option>
                        <option>ગુજરાતી</option>
                        <option>हिन्दी</option>
                        <option>Hrvatski</option>
                        <option>Magyar</option>
                        <option>ಕನ್ನಡ</option>
                        <option>മലയാളം</option>
                        <option>मराठी</option>
                        <option>नेपाली</option>
                        <option>ਪੰਜਾਬੀ</option>
                        <option>සිංහල</option>
                        <option>Slovenčina</option>
                        <option>தமிழ்</option>
                        <option>తెలుగు</option>
                        <option>اردو</option>
                        <option>Tiếng Việt</option>
                        <option>中文(香港)</option>
                        <option>Български</option>
                        <option>Français (Canada)</option>
                        <option>Română</option>
                        <option>Српски</option>
                        <option>Українська</option>
                    </select>
                </form>
                &#169; 2024 Instagram from Meta
            </div>
        </div> 
    )
}