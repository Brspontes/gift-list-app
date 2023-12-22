import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import UnselectedItemsDto from '../../models/unselectedItems.dto'

function GiftCard(unselectedItem: UnselectedItemsDto) {
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
            {unselectedItem.images.map((url, index) => (
              <div key={`${index}${unselectedItem.id}`}>
                <img src={url} key={unselectedItem.id} />
              </div>
            ))}
          </Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {unselectedItem.itemDescription}
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
