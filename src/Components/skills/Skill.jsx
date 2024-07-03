import React from 'react';
import './skill.scss';

const Skill = () => {
  return (
    <div className='container'>
      <div className='title'>
        <p>SKILLS</p>
      </div>
      <div className='exp-list'>
        <div className="exp-item">
          <div className='exp-info'>
            <p>HTML</p>
            <p>90%</p>
          </div>
          <div className='progress' data-percent="90">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>JAVA</p>
            <p>80%</p>
          </div>
          <div className='progress' data-percent="80">
            <span className="line" style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>Python</p>
            <p>90%</p>
          </div>
          <div className='progress' data-percent="90">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>Tableau</p>
            <p>60%</p>
          </div>
          <div className='progress' data-percent="60">
            <span style={{ width: "60%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>PowerBI</p>
            <p>40%</p>
          </div>
          <div className='progress' data-percent="40">
            <span style={{ width: "40%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
