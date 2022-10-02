import styles from './InputForm.module.css'



function InputForm({place,type,name,value,change}){

    

    function Start(){
    }
    return(
        <input onChange={change} className={styles.InputForm} type={type} name={name} id={name} placeholder={place} value={value} />
    )
}
export default InputForm