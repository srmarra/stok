import Lbtn from './util/img/LogoutBtn.png'
import styles from './Logout.module.css'
import Cookies from 'js-cookie';
function Logout(){
    function LogoutAction(){
        Cookies.remove("key");
        window.location.href = "../"
    }

    return(
        
        <img className={styles.BtnLogout} onClick={LogoutAction}  src={Lbtn} alt="" />
    )
}

export default Logout