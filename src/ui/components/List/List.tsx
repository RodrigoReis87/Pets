import { Button } from '@mui/material';
import {
    ListStyled,
    ListItem,
    Photo,
    Information,
    Name,
    Decription
} from './List.style'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService';

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
    const tamanhoMaximoTexto = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ListItem key={pet.id}>
                    <Photo src={pet.photo} alt={pet.name} />
                    <Information>
                        <Name>{pet.name}</Name>
                        <Decription>
                            {TextService.limitarTexto(pet.history, tamanhoMaximoTexto)}
                        </Decription>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}>
                            Adotar
                        </Button>
                    </Information>
                </ListItem>
            ))}
        </ListStyled>
    )
}