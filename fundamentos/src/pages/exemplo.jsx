import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo() {
  return (
    <Layout titulo='Usando Components '>
      <Cabecalho titulo='Next.js & React' />
      <Cabecalho titulo='Aprende Next na prática' />
    </Layout>
  )
}