import React, { Component } from 'react';
import { FaReact, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
  constructor() {
    super();

    this.state = {
      work_list: [
        {
          role: 'Senior Software Engineer',
          company: 'Globant',
          time: '01/2021 - Present',
          description: ['ReactJS, React Native, Redux, TypeScript, Firebase, etc.'],
          icon: <MdWork />,
          iconBackgroundColor: 'rgb(233, 30, 99)',
          iconColor: '#fff',
        },
        {
          role: 'Software Engineer',
          company: 'EPAM Systems',
          time: '12/2019 - 12/2020',
          description: ['Remotely working for Thomson Reuters.', 'Working with React (SSR, Context, Redux, PostCSS).'],
          icon: <FaReact />,
          iconBackgroundColor: '#0078ff',
          iconColor: '#fff',
        },
        {
          role: 'Frontend Engineer',
          company: 'Lasting Dynamics',
          time: '01/2019 - 12/2019',
          description: ['Working on Work Management System (React, Styled components, Apollo client, GraphQL).'],
          icon: <FaReact />,
          iconBackgroundColor: '#0078ff',
          iconColor: '#fff',
        },
        {
          role: 'Full Stack Developer',
          company: 'DiscreteMind',
          time: '04/2018 - 11/2018',
          description: [
            'Responsibilities: Working on diferent web-projects, both frontent and backend, creating react components, rest api endpoints, creating design for the MVP',
            'Stack: react, redux, jest, css, sass, golang, nodejs, figma.',
          ],
          icon: <FaReact />,
          iconBackgroundColor: '#0078ff',
          iconColor: '#fff',
        },
        {
          role: 'Student',
          company: 'Minsk State Higher Radiotechnical College',
          time: '2015 - 2019',
          description: ['Computer Science'],
          icon: <FaGraduationCap />,
          iconBackgroundColor: 'rgb(16, 204, 82)',
          iconColor: '#fff',
        },
      ],
    };
  }

  render() {
    return (
      <section id='timeline' className='timeline-section'>
        <div className='container'>
          <div className='title-box text-center'>
            <h3 className='title-a-timeline'>Work Experience & Education</h3>

            <div className='line-mf-timeline'></div>
          </div>

          <VerticalTimeline>
            {this.state.work_list.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className='vertical-timeline-element--work'
                date={item.time}
                icon={item.icon}
                iconStyle={{
                  background: item.iconBackgroundColor,
                  color: item.iconColor,
                }}
                contentStyle={{
                  borderTop: `3px solid ${item.iconBackgroundColor}`,
                }}
              >
                <h3 className='vertical-timeline-element-title'>{item.role} </h3>
                <h5 className='vertical-timeline-element-subtitle mt-2 '>
                  {item.company}
                  {item.link && (
                    <a target='_blank' rel='noopener noreferrer' className='ml-2 timeline-link-icon' href={item.link}>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </h5>
                <ul>
                  {item.description.map((d, i) => (
                    <li key={i}>{d} </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Timeline;
