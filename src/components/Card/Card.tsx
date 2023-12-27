/* eslint-disable @typescript-eslint/prefer-as-const */
import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  Alert,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Modal,
  Snackbar,
  TextField,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { Carousel } from 'react-responsive-carousel'
import UnselectedItemsDto from '../../models/unselectedItems.dto'
import { useState } from 'react'
import ApiService from '../../services/apiService'

interface CardProps {
  unselectedItem: UnselectedItemsDto
  reloadFunction: () => void
}

function GiftCard(cardProps: CardProps) {
  //MODAL
  const [openModal, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const successAlertClose = () => {
    cardProps.reloadFunction()
    setOpen(false)
    setSuccessAlert(false)
  }

  //TEXTFIELD
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  //ALERTS
  const [errorAlert, setErrorAlert] = useState(false)
  const [apiErrorAlert, setApiErrorAlert] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const [loadButton, setLoadButton] = useState(false)

  const selectItem = async () => {
    setLoadButton(true)
    const apiService = new ApiService()
    if (!(name && email && phone)) {
      setErrorAlert(true)
      return
    }

    const result = await apiService.selecTItem({
      email,
      name,
      phone,
      giftId: cardProps.unselectedItem.id,
    })

    if (!result) {
      setApiErrorAlert(true)
      return
    }
    setSuccessAlert(true)
  }

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: 250, md: 400, sm: 400 },
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Snackbar
            open={successAlert}
            autoHideDuration={2000}
            onClose={successAlertClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              {cardProps.unselectedItem.itemDescription} Reservado com sucesso
            </Alert>
          </Snackbar>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Você selecionou:
            <Typography variant="h6" fontWeight="bold">
              {cardProps.unselectedItem.itemDescription}
            </Typography>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Preencha as informações abaixo para que o item seja reservado para
            você 😊
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <TextField
              sx={{ width: { xs: 240, md: 380, sm: 380 } }}
              id="filled-basic-nome"
              label="Nome"
              variant="filled"
              onChange={(event) => setName(event.target.value)}
              required
            />
            <TextField
              sx={{ width: { xs: 240, md: 380, sm: 380 }, mt: 2 }}
              id="filled-basic-telefone"
              label="Telefone"
              variant="filled"
              onChange={(event) => setPhone(event.target.value)}
              required
            />
            <TextField
              sx={{ width: { xs: 240, md: 380, sm: 380 }, mt: 2 }}
              id="filled-basic-email"
              label="Email"
              variant="filled"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {loadButton ? (
              <LoadingButton
                loading
                variant="contained"
                sx={{
                  color: 'black',
                  borderRadius: 2,
                  padding: 1.2,
                  mt: 2,
                  width: 100,
                }}
              >
                Submit
              </LoadingButton>
            ) : (
              <Button
                sx={{
                  color: 'white',
                  borderRadius: 2,
                  padding: 1.2,
                  mt: 2,
                  width: 100,
                  backgroundColor: 'blue',
                  '&:hover': {
                    backgroundColor: 'green',
                  },
                }}
                className="button-selection"
                size="medium"
                onClick={() => selectItem()}
              >
                Reservar
              </Button>
            )}

            <Box sx={{ mt: 2 }}>
              {errorAlert && (
                <Alert
                  variant="outlined"
                  severity="error"
                  onClose={() => setErrorAlert(false)}
                >
                  Por favor, preencha todos os campos
                </Alert>
              )}
              {apiErrorAlert && (
                <Alert
                  variant="outlined"
                  severity="error"
                  onClose={() => setErrorAlert(false)}
                >
                  Ocorreu um erro para reservar o item, notifique o Brian ou a
                  Geovanna
                </Alert>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
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
            {cardProps.unselectedItem.images.map((url, index) => (
              <div key={`${index}${cardProps.unselectedItem.id}`}>
                <img src={url} key={cardProps.unselectedItem.id} />
              </div>
            ))}
          </Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardProps.unselectedItem.itemDescription}
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
            onClick={handleOpen}
          >
            Selecionar
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
export default GiftCard
