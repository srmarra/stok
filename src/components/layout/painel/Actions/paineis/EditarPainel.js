import BtnLogin from "../../../login/BtnLogin"
import InputForm from "../../../login/form/InputForm"
import style from "./EditarPainel.module.css"

function EditarPainel(){
    return(
        <div className={style.EditPainel}>
            <section>
                <InputForm place="Titulo" />
                <InputForm place="Descrição" />
                <InputForm place="Preço" />
                <InputForm place="Quantidade" />
                <BtnLogin text="EDITAR"/>
            </section>
        </div>
    )
}

export default EditarPainel