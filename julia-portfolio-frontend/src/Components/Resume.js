import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var ilustrations = this.props.data.ilustration.map(function(ilustration){
        var ilustrationImage = '../images/ilustration/'+ilustration.image;
        return <div key={ilustration.title} className="columns portfolio-item ilustration-margin">
                  <div className="item-wrap">
                      <img alt={ilustration.title} src={ilustrationImage} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{ilustration.title}</h5>
                        </div>
                      </div>       
                  </div>
                </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}>
                  <h3>{work.company}</h3>
                  <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                  <p>{work.description}</p>
                </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Ilustración</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns bgrid-halves cf">
                 {ilustrations}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
