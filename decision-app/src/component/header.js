import React from 'react';
import 'bulma/css/bulma.css'
import { Icon } from "semantic-ui-react";
export default class Header extends React.Component{
    render(){
          return <div><h3 className="is-size-1 help is-white">Indecision</h3>
          <h2 className="help is-size-4 is-white">Put your life in the hands of computer</h2>
          <Icon name="comments" size = "huge"></Icon>
          </div>
    }
}