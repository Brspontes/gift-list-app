import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'

function GiftCard() {
  return (
    <>
      <Card
        sx={{
          backgroundColor: 'white',
          maxWidth: 300,
          padding: 3,
          borderRadius: 10,
        }}
      >
        <CardActionArea>
          <Carousel showThumbs={false}>
            <div>
              <img src="https://tudooffice.com.br/wp-content/uploads/2020/06/rodo-de-pia.png" />
            </div>
            <div>
              <img src="https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/o/jogo-descanso-de-copo-com-suporte-redondo-6-pecas_747456.jpg" />
            </div>
            <div>
              <img src="https://global.cdn.magazord.com.br/feiraodetoalhas/img/2023/04/produto/2775/toalha-banho-rosto-fina-capri.jpg?ims=600x600" />
            </div>
          </Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rodo de Pia
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              color: 'white',
              backgroundColor: '#C0C0C0',
              borderRadius: 2,
              padding: 1.2,
            }}
            className="button-selection"
            size="medium"
          >
            Selecionar
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
export default GiftCard
