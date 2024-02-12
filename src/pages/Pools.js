import * as React from 'react';
import data  from './content/pools';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid , Paper } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

const images = require.context('./content/images', false, /\.(jpg|webp)$/);


function Servicegroup(props) {

  function openContact(item) {

  }

  return (
    <>
      <h1 style={{marginTop: '0' , marginBottom : '0' , paddingBottom : '5px' , color : 'white' , textAlign : 'center', fontSize : '6vh', backgroundColor : 'rgb(18, 148, 208)'}}>{props.item["Service"]}</h1>
      <div style={{flexWrap : 'wrap' , paddingTop : '2vh' , display  :'flex', flexDirection : 'row', justifyContent : 'center' , paddingRight : '5px', paddingLeft : '5px'}}>
      <Grid container>
        {
          props.item["Types"].map((data_item) => (
          <Grid item xs={12} md={6} xl={4}>
            <Card  sx={{margin : '1vw'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  src={imageList[data_item.uri]}
                  alt="green iguana"
                />    
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data_item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data_item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => openContact(data_item)}>Contact</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          ))
        }
      </Grid>
      </div>
    </>
  );
}

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const imageList = importAll(images);

function Pools() {

  const options = ["Pool Openings" , "Pool Maintenance", "Pool Closings" , "Additional Pool Services"];

  const [open , setOpen] = React.useState(false);

  function handleClick(newValue){
    setOpen(!open);
    setValue(newValue);
    console.log(newValue);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event , newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw' }}>
      <Tabs
      centered={true}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#FFFFFF"
        }
      }}
      sx={{ display : { xs : 'none' , sm : 'block'}}}
      style={{backgroundColor : 'rgb(17,75,123)', paddingTop : '1vh', width : '100%'}}
      value={value}
      onChange={handleChange}
      aria-label="wrapped label tabs example"
      >
      {options.map((data_item, index) => (
        <Tab
        style={{color : 'white', fontSize : '10pt' }}
        value={index}
        label={data_item}
        wrapped
        />
      ))}
      </Tabs>
      <Paper sx={{textAlign : 'center' , display : { xs : 'block', sm : 'none' , md : 'none'}}}>
        <List>
          <ListItemButton onClick={() => handleClick(value)}>
            <ListItemText justifyContent='center' primary="Services"/>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
            {
            options.map((data_item , index) => (
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemText primary={data_item} />
              </ListItemButton>
                
            ))
            }
            </List>
          </Collapse>
        </List>
          
      </Paper>
      <Servicegroup item={data[value]}/>
      
  </Box>
  );
}

export default Pools;
