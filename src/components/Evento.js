import Button from "../components/evento/Button";

function Evento({numero}){

    //FUNÇÃO QUE CRIA O EVENTO E DIZ O QUE ELE VAI FAZER
    function meuEvento(){
        console.log(`Opa, fui clicado!`);
    }

    function segundoEvento() {
        console.log("Ativando o segundo evento");
    }

    return(
        //RETORNANDO O CONTEUDO COM O BUTTON QUE CHAMA A FUNÇÃO DE EVENTO QUE FOI CRIADA
        <div>
            <p>Clique para disparar o evento:</p>
            <Button text="Primeiro Evento" event={meuEvento}/>
            <Button text="Segundo Evento" event={segundoEvento}/>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;

