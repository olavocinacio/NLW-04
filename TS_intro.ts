interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string
} //Estudar -> Interfaces

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){ //Estudar: Desestruturação de objetos
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send(){
        enviarEmail({
            para: "olavo1611@gmail.com",
            id: "9899",
            assunto: "Olá!",
            texto: "Tudo bem?"})
    }
}