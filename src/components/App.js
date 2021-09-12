import React from 'react';

// config
//import pageconfig from '../config/page.config.json';
import content from '../config/content.config.json';
import navigationConfig from '../config/navigation.config.json';

import { Window }       from './Window';
import { Navigation }   from './Navigation';
import { Footer }         from './Footer';
import { Banner }       from './Banner.js';
import { Vorstellung }  from './Vorstellung.js';
import { Iconrow }      from './Iconrow.js';
import { Details }      from './Details.js';
import { Textbox } from './Textbox';

const App = () => {

  // config
  const [config, setConfig] = React.useState({});
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    let pageconfig = require("../config/page.config.json");
    setConfig(pageconfig);
    document.title = config.title;

    let style = {
      backgroundColor: pageconfig.background.backgroundcolor,
      backgroundImage: `./imgs/${pageconfig.background.img.name}`,
    }
    setStyle(style);

  }, [config]);

  const components = { Banner, Vorstellung, Iconrow, Details, Navigation, Footer, Textbox }

  return (
    <div className='App' style={style}>
        <Window />
        <div className='Content'>
          {content.map((component, i) => {
              let Component = components[component.name];
              let data = {};
              if(component.name === "Navigation") { 
                data = navigationConfig 
              } else {
                data = component.data;
              }
              return (
                  <Component key={i} data={data}/>
              );
          })}
      </div>  
    </div>
  );
}

export {
  App
}

/*
export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'backgroundcolor': pageconfig.background.backgroundcolor,
      'backgroundimgRender': pageconfig.background.img.render,
      'imgname': pageconfig.background.img.name,
      'src': null,
    }

    if(this.state.backgroundimgRender === true) {
      import(`../imgs/${this.state.imgname}`).then(image => {
          this.setState({
              src:image.default
           });
      });
    }
  }
  

  render() {

    const components = { Banner, Vorstellung, Iconrow, Details, Navigation, Footer }

    return (
      <div className='App' style={style}>
          <Window />
          <div className='Content'>
            {content.map((component) => {
                let TagName = components[component.name];
                return (
                    <TagName data={component}/>
                );
            })}
        </div>
      </div>

    );
  }
}
*/
