import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [petsList, setPetsList] = useState<Pet[]>([]),

        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((resposta) => {
                setPetsList(resposta.data);
            })
    }, []);

    useEffect(() => {
        if (petSelecionado === null) {
            LimparFormulario();
        }
    }, [petSelecionado]);

    function adotar() {
        if (petSelecionado !== null) {
            if (validarDadosAdocao()) {
                ApiService.post('/adocoes', {
                    pet_id: petSelecionado.id,
                    email: email,
                    valor: valor
                })
                    .then(() => {
                        setPetSelecionado(null);
                        setMensagem('Pet adotado com sucesso!');
                    })
                    .catch((error: AxiosError) => {
                        setMensagem(error.response?.data.message);
                    })
            } else {
                setMensagem('Preencha os campos corretamente!')
            }
        }
    }

    function validarDadosAdocao() {
        return email.length > 0 && valor.length > 0;
    }

    function LimparFormulario() {
        setEmail('');
        setValor('');
    }

    return {
        petsList,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}