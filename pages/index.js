import React from 'react'
import Head from 'next/head'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'
import {getData, getSortedExperiencesData, getSortedEducationData} from '../lib/about'

export default function Index ({aboutData,experiencesData, educationData}) {
            return (
                <main>
                   <Header aboutData = {aboutData} experiencesData ={experiencesData}/>
                   <About aboutData = {aboutData}/>
                   <Experiences aboutData = {aboutData} experiencesData ={experiencesData} />
                   <Education aboutData = {aboutData} educationData = {educationData}/>
                   <Skills aboutData = {aboutData}/>
                   <style jsx global>{`
                        body {
                            font-family: 'Questrial', sans-serif;
                        }
                    `}</style>
                </main>
            )
    
}

export async function getStaticProps() {
  const aboutData = await getData()
  const experiencesData = await getSortedExperiencesData()
  const educationData = await getSortedEducationData()


    return {
      props: {
        aboutData,
        experiencesData,
        educationData
      }
    }
  }
  