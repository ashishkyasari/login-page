import React from 'react'
import ashish from '../images/ashish.jpeg'
import './About.css'

const About = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-15">
            <h1>About Us</h1>
          </div>

          <div class="col-4 me">
            <div class='image1'>
              <center><img src={ashish} alt='https://www.instagram.com/p/Bi18nqjFfLp/' class='img1'></img></center>
            </div>
            <h2>Hello! I am Ashish</h2>
            <p>I am Second Year IT student in Walchand College of Engineering Sangli. THis is my first project in reactJS. I have been trying this from many days. I have finally done this. I am glad that I could do this. I had taken help from the google. Most of the designing part I had taken from the Bootstrap. If you like my page then please like and subscribe.</p>
          </div>

          <div class="col-8">
            <div class="app">
              <h1>About App</h1>
            </div>
            <div class='content'>
              <p>This website is to add the poster and news. This website could be operated only by the user who is logged in. The user can upload the poster and the content related to that poster only by logging into the website. For the rest user this is the site to read the news. Here news related to technical content could be added. This site gets updated once in a weak. We are thinking of updating it once in a day. The news upoaded in this site will be first verified and then it will be updated</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About