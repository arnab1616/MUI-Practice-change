import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { updateProductByForm,deleteProductById, deleteProduct } from '../redux/productSlice';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard(elements) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false)
  };

  const editProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    // dispatch(updateProductByForm({id:elements.props.id,formJson}))
    dispatch(deleteProduct({id:elements.props.id,formJson}))
    handleClose();
  }

  return (
    <>
    <Card sx={{ maxWidth: 345 }} key={elements.props.id}>
      {/* <CardHeader title="Essence Mascara Lash Princess" subheader="September 14, 2016" /> */}
      <CardMedia
        component="img"
        height="194"
        image={`${elements.props.thumbnail}`}
        alt="Paella dish"
        loading='lazy'
      />
      <CardContent>
        <Typography variant='h6' >
          {elements.props.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary', display:'flex', alignItems:'center' }}>$ {elements.props.price}  - {elements.props.rating} <StarRateRoundedIcon sx={{mb:0.5 , color:"#ff9b00"}} />  </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {elements.props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleClickOpenEdit}>
          <EditIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>More about Product:</Typography>
          <Box sx={{ display:{xs:'block', md:'flex'} }}>
            <Box>
              <img src={elements.props.meta.qrCode} alt="" width={'100%'} />
            </Box>
            <Box sx={{mt:1}}>
              <Typography variant='body2' sx={{ marginBottom: 2 }}>Created at: {elements.props.meta.createdAt}</Typography>
              <Typography variant='body2' sx={{ marginBottom: 2 }}>Updated at: {elements.props.meta.updatedAt}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Delete Product?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete product permanantly?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={()=>{ setOpen(false); dispatch(deleteProduct(elements.props))}} autoFocus>
            Delete
            {/* dispatch(deleteProductById(elements.props)); */}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: editProduct,
        }}
      >
        <DialogTitle>Edit Product {openEdit?elements.props.id:null}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the fields carefully.
          </DialogContentText>
          <TextField autoFocus  required margin="dense" id="name" name="title" label="Product Title" type="text" fullWidth   />
          <TextField autoFocus required margin="dense" id="name" name="description" label="Description" type="text" fullWidth   />
          <Box sx={{display:'flex'}}>
            <TextField autoFocus required margin="dense" id="name" name="price" label="Price" type="number" fullWidth   sx={{mr:2}} />
            <TextField autoFocus required margin="dense" id="name" name="discountPercentage" label="Discount Percentage" type="number" fullWidth  />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}