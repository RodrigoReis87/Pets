import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { Dialog, Grid, TextField, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
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
  } = useIndex();

  return (
    <div>
      <Title
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você<br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>}
      />

      <List
        pets={petsList}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={((() => setPetSelecionado(null)))}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={'secondary'}
            onClick={((() => setPetSelecionado(null)))}>
            Cancelar
          </Button>
          <Button variant={'contained'}
            onClick={() => adotar()}>
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
    </div>
  )
}

export default Home
