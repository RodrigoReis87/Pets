import { TituloStyled, Subtitulo } from "./Title.style";

interface TituloProps {
    titulo: string;
    subtitulo?: string | JSX.Element;
}

export default function Title(props: TituloProps) {
    return (
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}