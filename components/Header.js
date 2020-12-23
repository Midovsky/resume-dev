import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Brace from './HeaderBrace'
import Title from './HeaderTitle'
import Button from './HeaderButton'

const themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a'
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4'
    }
}

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light'
        this.setState({
            theme: newtheme
        })
    }

    render() {

        let theme = themes[this.state.theme];
        console.log(this.props.aboutData)
        console.log(this.props.experiencesData)

        return (
            <section className="hero is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                            <Brace type="left" color={theme.font}/>
                            <ProfileImage toggle={this.toggleTheme.bind(this)} />
                            <Brace type="right" color={theme.font} />
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Title  color={theme.font} first_name= {this.props.aboutData.first_name} last_name= {this.props.aboutData.last_name} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Button title="My GitHub" url={this.props.aboutData.github} />
                                <Button title="My LinkedIn" url={this.props.aboutData.linkedin} />                                
                            </div>
                        </div>
                    </div>
                    <Background color={theme.background}/>
                </div>
            </section>
        )
    }
}

