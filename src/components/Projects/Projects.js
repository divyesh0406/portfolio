import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sentiment from "../../Assets/Projects/sentiment.webp";
import vts from "../../Assets/Projects/vts.webp";
import APARA from "../../Assets/Projects/APARA.webp";
import cyoa from "../../Assets/Projects/cyoa.webp";
import reciepeApp from "../../Assets/Projects/reciepeApp.webp";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={APARA}
              isBlog={false}
              title="AI-Powered Academic Research Assistant"
              description="This research assistant seeks to empower students, making their academic endeavors more efficient and contributing to advancements in the field of computer science. It’s potential lies in easing the burden on students when it comes to retrieving information, conducting data analysis, and navigating through extensive literature."
              ghLink="https://github.com/divyesh0406/AI-Powered-Academic-Research-Assistant"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyoa}
              isBlog={false}
              title="Choose Your Own Adventure Game"
              description="The game dynamically generates storylines based on user choices using natural language processing techniques. The application showcases how AI can personalize interactive narratives in real time, offering a unique experience with every playthrough.."
              ghLink="https://github.com/divyesh0406/Choose-Your-Adventure-AI-Game"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reciepeApp}
              isBlog={false}
              title="Recipe App"
              description="This mobile application, developed with Flutter and Firebase, streamlines recipe management by allowing users to add, explore, and favorite recipes. It integrates Razorpay for seamless ingredient purchases and provides features like order tracking and a shopping cart. Designed with a user-friendly interface, the app offers a practical solution for culinary enthusiasts to organize and enjoy cooking."
              ghLink="https://github.com/divyesh0406/Recipe-App-using-Flutter"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Developed a sentiment analysis application using BERT (Bidirectional Encoder Representations from Transformers) to classify text data into 'Positive', 'Negative', or 'Neutral' categories with 97% accuracy. The model leverages state-of-the-art NLP techniques for robust understanding of textual sentiment. Integrated the backend with a Flask-based web interface to enable user-friendly interaction with the model in real time."
              ghLink="https://github.com/divyesh0406/SentimentAnalysis"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vts}
              isBlog={false}
              title="Voice Transcription and Summarization"
              description="This Python-based project transforms audio recordings into concise, readable summaries. By leveraging speech recognition and natural language processing techniques, it accurately transcribes spoken content and distills it into key insights. Ideal for applications like meeting notes, interviews, and lectures, the tool enhances productivity by automating the extraction of essential information from lengthy audio files."
              ghLink="https://github.com/divyesh0406/Voice-Transcription-and-Summarisation"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
