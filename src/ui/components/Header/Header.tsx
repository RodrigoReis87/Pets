import { HeaderContainer, Logo } from './Header.style';
// import imagemLogo from '/public/imagens/logo.svg';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo src='https://i.imgur.com/y2cZt2F.png' alt='Adote um Pet' />
        </HeaderContainer>
    )
}