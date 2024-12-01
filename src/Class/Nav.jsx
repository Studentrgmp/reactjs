import React, { Component } from 'react'
import Logo from './Logo'
import Models from './Cart/Models'
import Elertic from './Cart/Elertic'
import Config from './Cart/Config'
import More from './Cart/More'
import Vist from './Cart/Vist'
import Icon from './Icon/Icon'
import { CgDisplayFlex } from 'react-icons/cg'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav id='nav' >
                    <Logo></Logo>
                    <div id='cart' style={{fontSize:"18px"}}>
                        <Models></Models>
                        <Elertic></Elertic>
                        <Config></Config>
                        <Vist></Vist>
                        <More></More>
                    </div>
                    <Icon></Icon>
                </nav>
            </div>
        )
    }
}
