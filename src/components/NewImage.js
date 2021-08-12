import React from 'react';

export class NewImage extends React.Component 
{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            mobile: {
                imageName: "",   
                height: "",
                width: "",
                src: "",
            },
            widescreen: {
                imageName: "",      
                height: "",
                width: "",
                src: "",
            }
        }

        if(this.props.data.mobile.imageName !== "") {
            import(`../imgs/${this.props.data.mobile.imageName}`).then(image => {
                this.setState({
                    mobile : {
                        src: image.default,
                        imageName: props.data.mobile.imageName,   
                        height: props.data.mobile,
                        width: props.data.mobile.width,
                        borderRadius: props.data.mobile.borderRadius,
                    }
                 });
            });
        }
       
        if(this.props.data.widescreen.imageName !== "") {
            import(`../imgs/${this.props.data.widescreen.imageName}`).then(image => {
                this.setState({
                    widescreen : {
                        src: image.default,
                        imageName: props.data.widescreen.imageName,      
                        height: props.data.widescreen.height,
                        width: props.data.widescreen.width,
                        borderRadius: props.data.widescreen.borderRadius,
                    }
                 });
            });
        }
        
        
    }

    render() {
        return(
            <picture>
                <source  srcSet={this.state.mobile.src} media="(orientation:portrait)"/>
                <img 
                    src={this.state.widescreen.src} 
                    alt={this.state.widescreen.imageName}
                    style={{
                        width: this.state.widescreen.width,
                        height:this.state.widescreen.height,
                        borderRadius: this.state.widescreen.borderRadius,
                    }} 
                />
            </picture>
                
            
        )
    }


}