import Lbtn from './util/img/LogoutBtn.png'
import styles from './Logout.module.css'
function Logout(){
    function LogoutAction(){
        console.log("Saiu");
        window.location.href = "../"
    }

    return(
        
        <img className={styles.BtnLogout} onClick={LogoutAction}  src={Lbtn} alt="" />
    )
}

export default Logout