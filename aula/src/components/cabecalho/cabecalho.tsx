import { tipocabecalho } from '@/types/tipocabecalho'

export default function cabecalho(props: tipocabecalho) {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <p>{props.msg}</p>
            <div>
                <p>Nome: {props.usuario.nome}</p>
                <p>Email: {props.usuario.email}</p>
            </div>
        </header>
    )
}
