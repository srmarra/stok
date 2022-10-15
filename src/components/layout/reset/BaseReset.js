import AreaReset from './AreaReset';
import styles from './BaseReset.module.css';

import  Ilustra  from "./img/IlustraReset.png";
function BaseReset(props){
    return(
        <section className={styles.BaseReset}>
            <nav>
                <img src={Ilustra} alt="" />
            </nav>
            <nav>
                <AreaReset API={props.API}/>
            </nav>
        </section>
    )
}

export default BaseReset