import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Image } from './Image';
import config from '../config/navigation.config.json'; 

/**
 * @name Navigation
 * @description React Komponent
 */
export class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
        'fullwith':             config.fullwith || '',
            'overBanner':       config.overBanner || '',
            "navbarAlign":      config.navbarAlign || '',
            'logo':             config.logo || '',
            'backgroundcolor':  config.backgroundcolor || '',
            'color':            config.color || '',
            'links':            config.links || '',
        }
    }

    getNavbarAlign = () => {
        switch (this.state.navbarAlign) {
            case "center":
                return "center";
            case "right": 
                return "flex-end";
            default:
                return "flex-start"; 
        }
    }

    render() {
        let style = {backgroundColor: this.state.backgroundcolor};
        let overBanner = (this.state.overBanner ? 'absolute' : '');
        let layout = this.state.fullwith === true ? 'container-fluid': 'container';
        let links = this.state.links;
        
        return(
            <div className={`Ǹavigation ${overBanner}`} style={style}>
                <div className={`navbar ${layout}`}> 

                    {/* logo */}
                    <a className="logo" href="#">
                        {this.state.logo !== "" ? <Image data={this.state.logo}/> : '' }
                    </a>
    
                    {/* navigation */}
                    <div className="navbar-container" id="navbarSupportedContent" style={{justifyContent: this.getNavbarAlign()}}>
                        <div className="d-flex flex-row flex-nowrap">
                            {/* Loop */}
                            {links.map((link, index) => {
                                if(link.outside) {
                                    return (
                                        <a  key={index} id={'a'+index} className="nav-link" aria-current="page" title={link.title || ''} href={link.url || ""} target="_blank" rel="noreferrer" style={{color: this.state.color}}>
                                            {link.name} 
                                        </a>
                                    );
                                } else {
                                    return <Link key={index} className="nav-link" to={link.url}> {link.name} </Link>
                                }
                            })}
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div> 
        )
    }
    
}


