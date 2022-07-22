import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

function Project () {
    let itemData = [
        {
            img: require('../../assets/images/mental-health-buddy-screenshot.png'),
            title: 'Mental Health Buddy',
            application: 'https://chardmuffin.github.io/mental-health-buddy/',
            github: 'https://github.com/chardmuffin/mental-health-buddy'
        },
        {
            img: require('../../assets/images/pot-luck.PNG'),
            title: 'Potluck',
            application: 'https://potluck-inc.herokuapp.com/',
            github: 'https://github.com/Qlaub/potluck'
        },
        {
            img: require('../../assets/images/roam-screenshot.png'),
            title: 'Roam',
            application: 'https://pacific-depths-60618.herokuapp.com/',
            github: 'https://github.com/beatricekallen/roam'
        },
        {
            img: require('../../assets/images/textntech.png'),
            title: 'Textn Tech',
            application: 'https://textn-tech.herokuapp.com/',
            github: 'https://github.com/MalikSpruill/textn-tech'
        },
        {
            img: require('../../assets/images/weathermantis.png'),
            title: 'Weather Mantis',
            application: 'https://malikspruill.github.io/weather-mantis/',
            github: 'https://github.com/MalikSpruill/weather-mantis'
        },
        {
            img: require('../../assets/images/passwordformulator.png'),
            title: 'Password Formulator',
            application: 'https://malikspruill.github.io/password-formulator/',
            github: 'https://github.com/MalikSpruill/password-formulator'
        },  
    ]

  return (
    <ImageList sx={{ 
      width: '50%', 
      height: '50%',
      margin: '0 auto'
      }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"
        style={{
          fontSize: '2rem',
          color: '#7981A2'
        }}>Projects</ListSubheader>
      </ImageListItem>
      {itemData.map((item, i) => (
        <ImageListItem key={i}>
          <img
            sx={{width: '10%', height: '8%'}}
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={(<a href={item.application}
                target='_blank'
                rel="noreferrer"         
                style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>{item.title}
                </a>)}
            subtitle={(<a href={item.github}
                target='_blank'
                rel="noreferrer"         
                style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Github Repo
                </a>)}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Project;