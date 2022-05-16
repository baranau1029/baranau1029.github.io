import React from 'react';
import myImage from '../img/profile.jpg';
import { SiFlutter, SiJavascript, SiTypescript, SiRedux, SiFirebase, SiAngular } from 'react-icons/si';
import { FaHtml5, FaNode, FaReact } from 'react-icons/fa';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: 'ReactJS_skill', content: 'ReactJS', porcentage: '95%', value: '95', icon: <FaReact /> },
        { id: 'ReactNative_skill', content: 'React Native', porcentage: '95%', value: '95', icon: <FaReact /> },
        { id: 'Redux_skill', content: 'Redux', porcentage: '90%', value: '90', icon: <SiRedux /> },
        { id: 'Angular_skill', content: 'Angular', porcentage: '90%', value: '90', icon: <SiAngular /> },
        { id: 'TypeScript_skill', content: 'TypeScript', porcentage: '90%', value: '90', icon: <SiTypescript /> },
        { id: 'JavaScript_skill', content: 'JavaScript', porcentage: '90%', value: '90', icon: <SiJavascript /> },
        { id: 'HTML_CSS_skill', content: 'HTML / CSS', porcentage: '85%', value: '85', icon: <FaHtml5 /> },
        { id: 'NodeJS_skill', content: 'NodeJS / ExpressJS', porcentage: '75%', value: '75', icon: <FaNode /> },
        { id: 'Firebase_skill', content: 'Firebase', porcentage: '90%', value: '90', icon: <SiFirebase /> },
        { id: 'Flutter_skill', content: 'Flutter', porcentage: '70%', value: '70', icon: <SiFlutter /> },
      ],
      about_me: [
        {
          id: 'first-p-about',
          content: 'I am a senior Front-End Developer who loves to transform ideas into reality using code.',
        },
        { id: 'second-p-about', content: 'Motivated developer with experience creating websites and mobile applications. ' },
      ],
    };
  }

  render() {
    return (
      <section id='about' className='about-mf sect-pt4 route'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='box-shadow-full'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='row'>
                      <div className='col-sm-6 col-md-6' style={{ margin: '0 auto' }}>
                        <div className='about-img' style={{ textAlign: 'center' }}>
                          <a href={myImage} data-lightbox='gallery-myimage'>
                            <img src={myImage} className='img-fluid rounded b-shadow-a' alt='profile-pic' />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className='about-me pt-4 pt-md-0'>
                      <div className='title-box-2'>
                        <h5 className='title-left'>About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className='lead' key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='skill-mf'>
                      {/* <p className="title-s">Skill</p> */}
                      <div className='title-box-2'>
                        <h5 className='title-skill'>My Skills</h5>
                      </div>
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>
                              {' '}
                              {skill.icon != null ? skill.icon : ''} {skill.content}
                            </span>{' '}
                            <span className='pull-right'>{skill.porcentage}</span>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
