import propTypes from "prop-types"

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

/* DEFINIÇÃO DE TIPO PARA PROPS */
Item.propTypes = {
    marca: propTypes.string.isRequired,
    ano_lancamento: propTypes.number,
}

//DEFINIÇÃO DE VALOR PADRÃO
Item.defaultProps = {
   marca: 'Faltou a marca',
   ano_lancamento: 0,
}

export default Item;