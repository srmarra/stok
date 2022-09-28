import AreaReset from './AreaReset';
import styles from './BaseReset.module.css';

import  Ilustra  from "./img/IlustraReset.png";
function BaseReset(){
    return(
        <section className={styles.BaseReset}>
            <nav>
                <img src={Ilustra} alt="" />
            </nav>
            <nav>
                <AreaReset/>
            </nav>
        </section>
    )
}

export default BaseReset