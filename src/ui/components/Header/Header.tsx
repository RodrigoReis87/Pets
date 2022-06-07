import { HeaderContainer, Logo } from './Header.style';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo src='/public/images/logo.svg' alt='Adote um pet' />
        </HeaderContainer>
    )
}