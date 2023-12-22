import './App.css'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import noivos from '../assets/noivos.jpg'
import { Fade } from 'react-awesome-reveal'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import GiftCard from './Card/Card'
import Grid from '@mui/material/Grid'

function App() {
  return (
    <div className="body-app">
      <div className="body-center-div-all">
        <Fade direction="right">
          <div className="body-center">
            <h2>Geovanna & Brian</h2>
            <Avatar
              className="avatar"
              alt="Brian e Geovanna"
              sx={{ width: 150, height: 150 }}
              src={noivos}
            />
            <br />
            <h3>Chá Bar</h3>
            <Divider variant="middle" />
            <p className="introduction">
              Desenvolvemos esse site, na intenção de auxilia-los na organização
              dos presentes e também como forma de convite. Ao selecionar o
              presente, passando email e telefone, irá receber em seu e-mail o
              endereço juntamente com as imagens do item de modelo. Agradeço por
              estar nos ajudando e contribuindo para que possamos nos realizar e
              poder em um futuro próximo estarmos morando e crescendo juntos.
            </p>
          </div>
        </Fade>
        <div className="body-center-gifts">
          <Fade direction="left">
            <h2 className="body-center-gifts-title">Lista de presentes</h2>
            <Divider variant="middle" />
          </Fade>
          <Fade direction="left">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 5,
              }}
            >
              <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
                <GiftCard />
              </Grid>
              <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
                <GiftCard />
              </Grid>
              <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
                <GiftCard />
              </Grid>
              <Grid item columns={{ xs: 4, sm: 8, md: 12 }}>
                <GiftCard />
              </Grid>
            </Grid>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default App
