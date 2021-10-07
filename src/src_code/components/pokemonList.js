import React, { Component } from 'react' 
import CommonDropDown from './common/commonDropDown'; 

export default class PokemonList extends Component { 
    componentDidMount() { 
        this.setAbility(this.props.Content.drop1[0].ability.name); 
    } 
    setAbility = (event) => { 
         this.props.getAbilities(event); 
     } 

    render() { 
        return ( 
            <div  className="component"> 
              <h1>{this.props.Content.heading}</h1><br/>
                <div className="dropdown">
                <label> Select Name: </label><br/>
                    <CommonDropDown dropDownList={this.props.Content.drop1} id="label1"
                        handleOnChange={this.setAbility} /> 
                    <br />
                <label> Select Abilities: </label><br/>
                     <CommonDropDown dropDownList={this.props.result} id="label2"/> 
                     {this.props.error && <p style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>Something went wrong. </p>}
                </div> 
            </div> 
        ) 
    }  
}  
 
 