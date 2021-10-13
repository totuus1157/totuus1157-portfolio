import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import anzuoteGIF from '../../images/anzuote.gif';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const language = ['・Javascript(Typescript)', '・HTML', '・CSS', '・SQL'];
  const technology = ['・React(Next.js)', '・Firebase', '・Docker', '・Git', '・Github'];

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <a href={anzuoteGIF}>
                  <AboutImg alt="profile picture" filename={img} />
                </a>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">【言語】</p>
                {language.map((lang) => (
                  <p className="about-wrapper__info-text">{lang}</p>
                ))}
                <p className="about-wrapper__info-text">【技術】</p>
                {technology.map((tech) => (
                  <p className="about-wrapper__info-text">{tech}</p>
                ))}
                <p className="about-wrapper__info-text">【エディタ】</p>
                <p className="about-wrapper__info-text">・Spacemacs</p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <iframe
                  width="280"
                  height="158"
                  src="https://www.youtube.com/embed/5G0hHKvV8JY?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <a href="https://www.sunday-webry.com/detail.php?title_id=1093">葬送のフリーレン</a>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <a href="https://okanomukouni.seesaa.net">ブログ</a>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
