import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'static/content')

export async function getData() {
  const fullPath = path.join(contentDirectory, `about.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

    console.log("sss");
    console.log(contentHtml);
  // Combine the data with the contentHtml
  return {
    contentHtml,
    ...matterResult.data
  }
}


export function getSortedExperiencesData() {

  const experiencesDirectory = path.join(contentDirectory, 'experiences')


  // Get file names under /content/experiences
  const fileNames = fs.readdirSync(experiencesDirectory)
  const allExperiencesData = fileNames.map(  (fileName) => {

    // Read markdown file as string
    const fullPath = path.join(experiencesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    

    


return {
    ...matterResult.data
  
}


  })
   // Sort posts by date
  return allExperiencesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }) 
}

export function getSortedEducationData() {

  const educationDirectory = path.join(contentDirectory, 'education')


  // Get file names under /content/experiences
  const fileNames = fs.readdirSync(educationDirectory)
  const allEducationData = fileNames.map(  (fileName) => {

    // Read markdown file as string
    const fullPath = path.join(educationDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    

return {
    ...matterResult.data
  
}


  })
   // Sort posts by date
  return allEducationData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }) 
}