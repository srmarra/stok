import styles from "./DelPainel.module.css";
function DelPainel(props){
    return(
        <div className={styles.DelPainel}>
            <section>
                <nav><div onClick={props.change} ><span></span></div></nav>
                <nav>
                    <p>Deseja apagar?</p>
                    <div>
                    <button onClick={props.DelAct}>SIM</button>
                    <button onClick={props.change}>NÃO</button>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default DelPainel