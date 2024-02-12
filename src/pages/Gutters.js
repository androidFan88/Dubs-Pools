import Card  from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import other from './content/other.json';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Button, CardActionArea , Grid } from '@mui/material';

const images = require.context('./content/images/Gutters', false, /\.(jpg|webp)$/);

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const imageList = importAll(images);

let gutterData = other.slice(0,2);

function Gutters() {

  function openContact(value) {

  }

  return (
    <div style={{ width : '100%' , display : 'flex' , flexDirection : 'column' ,  flexWrap : 'wrap'}}>
      {gutterData.map((item) => (
        <div style={{ display : 'flex' , flexDirection : 'row', justifyContent : 'space-around', flexWrap : 'wrap',  width : '100%'}}>
          {item.Types.map((data_item) => (
            <div style={{backgroundColor : 'white', height : '50vh' , width : '50vh'}}>
              {data_item.description}
            </div>
          ))}
        </div>  
      ))
      }
    </div>
  );
}

export default Gutters;