import '../styles/App.css';
import data from './content/about.json';
import { Grid , Paper } from '@mui/material';
import Carousel from 'nuka-carousel'; 

function Home() {

const images = require.context('./content/images', false, /\.(jpg|webp)$/);

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const imageList = importAll(images);



  return (
    <Grid container justifyContent='center'>
      <Grid textAlign='center' item xs={10} sm={10}>
        <Carousel 
        renderCenterLeftControls={() => (
          null
        )}
        renderCenterRightControls={() => (
          null
        )}
        autoplay='true'
        autoplayInterval='3500'
        style={{paddingTop : '5vh'}} wrapAround='true'>
          {data.map((data_item) => (
            <div>
              <h1 style={{fontSize : '30pt' , color : 'white', textAlign : 'center'}}>{data_item.title}</h1>
              <Grid item direction="row" marginLeft="12%" marginRight='auto' textAlign='center'>
                <div className='aboutTile' justifyContent='center' style={{backgroundColor : 'rgb(17,75,123)' , color : '#FFFFFF' , padding:'1%', width : '85%', maxHeight : '50vh' , textAlign : 'center'}}>
                  <img 
                  style={{display : 'flex' , maxHeight : '40vh' , maxWidth : '80%', margin : 'auto'}}
                  src={imageList[data_item.uri]}
                  alt="not found"
                  />
                  <div style={{display : 'flex' , fontSize : '2.5vh' , width : '100%' , alignSelf : 'center', margin : '20px'}}><p style={{textAlign : 'center'}}>{data_item.description}</p></div>
                </div>
              </Grid>
            </div>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}

/*
 <Grid container spacing={2} paddingBottom={5} paddingTop={5} textAlign='center'> 
  
  </Grid>
*/

export default Home;
