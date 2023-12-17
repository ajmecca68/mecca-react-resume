import React from 'react';
import aboutImage from '../assets/home/about.jpg';
import buyImage from '../assets/home/buy-now.jpg';
import projectImage from '../assets/home/projects.jpg';
import resumeImage from '../assets/home/resume.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <div className="image-links-container">
        <Link to="/about">
        <img src={aboutImage} alt="about me" />
          <p>About</p>
        </Link>
        <Link to="/product">
          <img src={buyImage} alt="Buy-Now" />
          <p>Products</p>
        </Link>
        <Link to="/project">
          <img src={projectImage} alt="Project" />
          <p>Projects</p>
        </Link>
        <Link to="/contact">
          <img src={resumeImage} alt="Resume" />
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
//         velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
//         ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
//         non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
//         ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
//         rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
//         tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
//         porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
//         vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
//         fames ac ante ipsum primis in faucibus.
//       </p>
//     </div>
//   );
// }
