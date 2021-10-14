import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Iframely from '../Iframely';
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

  const technology = [
    '・React(Next.js)',
    '・Typescript',
    '・Docker',
    '・Git',
    '・Github',
    '・Firebase',
    '・Spacemacs',
  ];

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
                <h1>🖥️ かたいこと 💻</h1>
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">【使える技術】</p>
                {technology.map((tech) => (
                  <p className="about-wrapper__info-text">{tech}</p>
                ))}
                <h1>🎹️ やわいこと 📚</h1>
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
                <p className="about-wrapper__info-text" style={{ marginTop: '10px' }}>
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <Iframely />
                {parse(
                  '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.sunday-webry.com/share.php/?title_id=1093" data-iframely-url="//cdn.iframe.ly/xjGO3qj?card=small"></a></div></div>'
                )}
                <p className="about-wrapper__info-text" style={{ marginTop: '10px' }}>
                  {paragraphFour || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {parse(
                  '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="http://okanomukouni.seesaa.net/" data-iframely-url="//cdn.iframe.ly/hOfiQVF"></a></div></div>'
                )}
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
