import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        let x =0;
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                {this.props.educationData.map(({ university, major, time }) => {
                    let c;
                    if (x%2 == 0){
                        c = 'blue';
                    }
                    else{
                        c='red';
                    }
                    x++;
                    console.log(c);
                  return  <Item 
                    time={time}
                    name={university}
                    major={major}
                    color={c}
                />
    })}
                  
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}