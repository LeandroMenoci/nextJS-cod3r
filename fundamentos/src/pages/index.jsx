import Navegador from "../components/Navegador";



export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      <Navegador cor='crimson' destino='/estiloso' titulo='Estiloso' />
      <Navegador cor='#9400d4' destino='/exemplo' titulo='Exemplo' />
      <Navegador destino='/jsx' titulo='JSX' />
      <Navegador destino='/navegacao' titulo='Navegção #01' cor='green' />
      <Navegador destino='/cliente/sp-2/123' titulo='Navegção #02' cor='red' />
      <Navegador destino='/estado' titulo='Estado' cor='darkblue' />
      <Navegador destino='/integracao_1' titulo='Integração com API #01' cor='darkred' />
      <Navegador destino='/estatico' titulo='Conteúdo Estático' cor='orange' />
    </div>
  )
}