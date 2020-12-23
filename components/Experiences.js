import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        let x =0;
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">

                {this.props.experiencesData.map(({ company, jobDescription, date, content }) => {
                   let c;
                   if (x%2 == 0){
                       c = 'left';
                   }
                   else{
                       c='right';
                   }
                   x++;
                   console.log(c);

                   var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                   console.log(randomColor);
                   
                   return <Timeline side={c} time={date} color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>{company}</h4>
                        <p>
                            {content}
                        </p>
                    </Timeline> 
    })}
                    
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}