import { Link, Box } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, Logo, LinksContainer } from './AdminHeader.style';

export default function AdminHeader() {
    return (
        <HeaderContainer>
            <div>
                <Logo src={'https://i.imgur.com/y2cZt2F.png'} alt={'Adote um pet'} />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>Relatório
                            <Box
                                component={'span'}
                                sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}