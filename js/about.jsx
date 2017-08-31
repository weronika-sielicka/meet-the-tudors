import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component
{
  render(){
    return (
      <div>
<section id="aboutSection">
  <p id='aboutHeading'>About this little page of mine</p>
  <p className="aboutP">This is my first SPA. Made with React JS, Sass, a dash of Bootstrap and Earl Grey.</p>
  <p className="aboutP">Who am I?</p>
  <p className="aboutP">You've probably noticed I like the color red and I'm interested in the history of the Tudors.</p>
  <p className="aboutP">It's only a tiny fraction of my interests.</p>
  <p className="aboutP">A pretty large fraction of them is web development.</p>
  <p className="aboutP">You can view the sourcecode by clicking <a href="#" target="_blank"><span>here</span></a>.</p>
  <p className="aboutP">Oh, how rude of me- I forgot to introduce myself! That's what babbling on about code gets you!</p>
  <p className="aboutP">I'm Weronika.</p>
  <p className="aboutP">If you like this page and want to get to know me a bit better, go <a href="#" target="_blank"><span>here</span></a>.</p>
  <p className="aboutP">As this is my first project in React JS, it might not be as super awesome as it could be. If you have any tips or suggestions, let me know at meet-the-tudors@gmail.com.</p>




</section>
<section id="disclaimerSection">
<p id='disclaimerHeading'>Legal stuff</p>
<p className="disclaimerP">Boring? Maybe. Important? Yup.</p>
<p className="disclaimerP">The short articles about each Tudor were written by me (yes, I am THAT dorky) based on general knowledge.</p>
<p className="disclaimerP">The Vids section was created based on <a href="https://www.udemy.com/react-redux/" target="_blank"><span>this</span></a> Udemy course.</p>
<p className="disclaimerP">All the images and the favicon come from the glorious Wikimedia Commons.</p>
<p className="disclaimerP">They are all avaliable under the Creative Commons license.</p>
<p className="disclaimerP">To learn more about the legal stuff concerning these images, go <a href="https://creativecommons.org/terms/" target="_blank"><span>here</span></a>.</p>

</section>
</div>
    )
  }
}





module.exports = About;
