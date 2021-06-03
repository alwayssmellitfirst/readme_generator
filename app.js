const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const axios = require('axios')
const readmeFile = require('./readme.js')

const createReadme = () => {
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project. What does it do?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would someone use this?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How should someone contribute to the project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How should someone test the project?'
    }
  ])
    .then(readme => {
      console.log(readme.title)
      readmeFile.add(`# ${readme.title}
  ## ${readme.description}`)
      writeFile('generatedreadme.md', readmeFile.create(), err => {
        if (err) { console.log(err) }
        console.log('readme file created!')
      })
    })
    .catch(err => console.log(err))
}

createReadme()