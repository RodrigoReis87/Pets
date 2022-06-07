import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { loadDefaultErrorComponents } from 'next/dist/server/load-components';

const Home: NextPage = () => {
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
        pets={[
          {
            id: 1,
            name: 'Bidu',
            history: 'biusaedgiusdhiugshgoivjzxsxpokxajwfogihoewJKFPOMBDPOgjkpoewkpgjhiojdgfpSKPVkpogkwgkepo',
            photo: 'https://br.depositphotos.com/58906929/stock-photo-cairn-terrier-puppy.html'
          },
          {
            id: 2,
            name: 'Banzé',
            history: 'poisfjEGFAALKVMOGJEWOIJGKLASÇJGLJSGLKSDFÇKSkkçlkç\kçkgçlsgjlkrjhpkerkheekhçkçkhça',
            photo: 'https://image.cachorrogato.com.br/textimages/cachorrinho-ideal.jpg'
          }
        ]}
      />
    </div>
  )
}

export default Home
