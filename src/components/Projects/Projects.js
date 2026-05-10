import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AICODE from "../../Assets/Projects/AICODE.webp";
import sentiment from "../../Assets/Projects/sentiment.webp";
import vts from "../../Assets/Projects/vts.webp";
import APARA from "../../Assets/Projects/APARA.webp";
import cyoa from "../../Assets/Projects/cyoa.webp";
import reciepeApp from "../../Assets/Projects/reciepeApp.webp";
import URLShortner from "../../Assets/Projects/URLShortner.webp";
import AutoML from "../../Assets/Projects/AutoML.webp";
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
              imgPath={URLShortner}
              isBlog={false}
              title="Distributed URL Shortener with Rate Limiting and Analytics"
              description="Full-stack distributed URL shortener built with FastAPI, PostgreSQL, Redis, and Docker. Features Redis cache-aside redirects, Lua-based rate limiting, idempotent creation, async SQLAlchemy, and a Kafka event pipeline for analytics. Backed by GitHub Actions CI/CD with 90% pytest coverage and validated via k6 load tests sustaining 300+ req/s with zero failures. Deployed on Render and Vercel."
              ghLink="https://github.com/divyesh0406/Distributed-URL-Shortener-with-Rate-Limiting---Analytics"
              demoLink="https://distributed-url-shortener-with-rate.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutoML}
              isBlog={false}
              title="AutoML Command Center"
              description="Full-stack AutoML platform built with Next.js, FastAPI, PostgreSQL, Redis, and Celery, supporting end-to-end workflows from dataset upload and profiling to training, deployment, and real-time inference. Includes an AI-powered, dataset-aware assistant with tool-driven orchestration that automates 80%+ of experiment guidance. Deployed on Vercel and Fly.io with cross-validation, hyperparameter tuning, and telemetry, achieving sub-second inference latency."
              ghLink="https://github.com/divyesh0406/AutoML-Command-Center"
              demoLink="https://auto-ml-command-center.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AICODE}
              isBlog={false}
              title="AI-Coding Assistant"
              description="AI Coding Assistant is a Next.js app-router project styled with Tailwind that connects to Google’s Gemini to explain code, debug snippets with optional error context, and generate language-specific code from natural-language prompts; it offers tabbed workflows for each task, prefilled samples and quick prompts, and a history panel that logs recent inputs/outputs so users can quickly revisit or reuse prior interactions."
              ghLink="https://github.com/divyesh0406/AI-Coding-Assistant"
              // demoLink=""
            />
          </Col>
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
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reciepeApp}
              isBlog={false}
              title="Recipe App"
              description="This mobile application, developed with Flutter and Firebase, streamlines recipe management by allowing users to add, explore, and favorite recipes. It integrates Razorpay for seamless ingredient purchases and provides features like order tracking and a shopping cart. Designed with a user-friendly interface, the app offers a practical solution for culinary enthusiasts to organize and enjoy cooking."
              ghLink="https://github.com/divyesh0406/Recipe-App-using-Flutter"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Developed a sentiment analysis application using BERT (Bidirectional Encoder Representations from Transformers) to classify text data into 'Positive', 'Negative', or 'Neutral' categories with 97% accuracy. The model leverages state-of-the-art NLP techniques for robust understanding of textual sentiment. Integrated the backend with a Flask-based web interface to enable user-friendly interaction with the model in real time."
              ghLink="https://github.com/divyesh0406/SentimentAnalysis"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vts}
              isBlog={false}
              title="Voice Transcription and Summarization"
              description="This Python-based project transforms audio recordings into concise, readable summaries. By leveraging speech recognition and natural language processing techniques, it accurately transcribes spoken content and distills it into key insights. Ideal for applications like meeting notes, interviews, and lectures, the tool enhances productivity by automating the extraction of essential information from lengthy audio files."
              ghLink="https://github.com/divyesh0406/Voice-Transcription-and-Summarisation"
              // demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink=""      
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
