import Barra from './components/componentes_Principal/Barra'
import './App.css'
import Principal from './components/Principal/Principal'
import Secundario from './components/secundario/Secundario'
import SobreMi from './components/secundario/SobreMi'
import Habilidades from './components/secundario/Habilidades'
import Formacion from './components/secundario/Formacion'
import Proyectos from './components/secundario/Proyectos'
import Contacto from './components/secundario/Contacto'


function App() {

  return (
    <>
      
      <Barra></Barra>
      
      <Principal></Principal>
      <Secundario subComponent={<SobreMi clase={'div_sobreMi'} />} id={'sobre mi'} clase={"div_componenteSecundario_oscuro"} titulo='Sobre mi' />
      <Secundario subComponent={<Habilidades />} id={'Habilidades'} clase={"div_componenteSecundario"} titulo='Habilidades' />
      <Secundario subComponent={<Formacion />} id={'Formacion'} clase={"div_componenteSecundario_oscuro"} titulo='Formacion' />
      <Secundario subComponent={<Proyectos />} id={'Proyectos'} clase={"div_componenteSecundario"} titulo='Proyectos' />      
      <Secundario subComponent={<Contacto />} id={'Contacto'} clase={"div_componenteSecundario_oscuro_footer"} titulo='Contactame' claseH2='titulo_footer' />
    </>
    
  )
}

export default App
