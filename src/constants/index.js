import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `As a beginner in full stack development, I am eager to learn and explore the exciting world of web development. My journey begins with mastering the essentials, including HTML and CSS, while diving into modern frameworks such as Next.js for building dynamic web applications. I am also keen on back-end development using Node.js, combined with PostgreSQL for robust database management. To enhance the user interface, I enjoy utilizing Material-UI (MUI) and Tailwind CSS to create visually appealing and responsive designs.`;
export const ABOUT_TEXT = `Hello! I'm an enthusiastic and motivated fresher with a strong foundation in modern web development and programming.I have hands-on experience with popular frameworks and libraries such as Next.js, Express.js, and Node.js, enabling me to build both client-side and server-side applications. I'm also proficient in utilizing Material-UI and Tailwind CSS to enhance the visual appeal and functionality of my projects. I am familiar with Git for version control, Docker for containerization, and Postman for API testing. My introduction to cloud services includes working with Heroku, which has broadened my understanding of scalable application deployment. I look forward to contributing my skills and creativity to exciting projects and collaborating with others in the tech community!`

export const PROJECTS = [
  {
    title: "Quick Bid",
    image: project1,
    description:
      "Made an Auction Platform using MERN Stack.It consist of 3 types of users the Auctioneer ,the Bidder & the Super Admin.The backend is built using Node.js and Express.js, which provide the server-side functionality.Implemented MongoDB for the database.Created Frontend using React.js and styled it using Styled-component package",
    technologies: ["Reactjs", "Node.js", "MongoDB"],
  },
  {
    title: "Server Side",
    image: project2,
    description:
      "Built a Rest API using Node.js and Express.js.Implemented Docker Compose & linking the Node.js application with the MySQL container and setting up Docker volumes for persistent storage.Created a simple GUI to interact with the API, enabling users to perform CRUD operations on the MySQL database.Pushed built images to Docker Hub, and deployment of the application on Heroku.",
    technologies: ["NodeJs","ExpreeJs","Docker","MySQL"],
  },
  {
    title: "Next.js Ship",
    image: project3,
    description:
      "Implemented secure user Authentication leveraging Next.js, enabling users to register and log in with credentials.Configured CI/CD pipelines to automate the build and deployment process using GitHub Actions. Built Docker images from the application code and deployed them to an Heroku, ensuring smooth and consistent deployment.",
    technologies: ["NextJs","CI/CD pipelines","Docker","Heroku"],
  },
  {
    title: "Audio Visor",
    image: project4,
    description:
      "Implemented generative AI to create an Image to audio converter.The project allow user to upload an image, then an object detecting module will provide the list of all the objects preset in the image.Leveraging Chat GPT to create a boundary around the detected object also it helps to create a descriptive audio about the list of objects detected by object detecting model .Created a text-to-speech module that will convert the description created by chat gpt into an audio and is provided as the output to the user .",
    technologies: ["Generative Ai","Chat GPT"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9670350153 ",
  email: "suyashisainath1@gmail.com",
};
