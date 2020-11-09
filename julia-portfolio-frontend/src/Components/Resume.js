import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var ilustrations = this.props.data.ilustrations.map(function (
        ilustration
      ) {
        var ilustrationImage = "../images/ilustration/" + ilustration.image;
        return (
          <div
            key={ilustration.title}
            className="columns portfolio-item ilustration-margin"
          >
            <div className="item-wrap">
              <img alt={ilustration.title} src={ilustrationImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{ilustration.title}</h5>
                  <p>{ilustration.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
      var paintings = this.props.data.paintings.map(function (
        painting
      ) {
        var paintingImage = "../images/paintings/" + painting.image;
        return (
          <div
            key={painting.title}
            className="columns portfolio-item ilustration-margin"
          >
            <div className="item-wrap">
              <img alt={painting.title} src={paintingImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{painting.title}</h5>
                  <p>{painting.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row ilustration">
          <div className="three columns header-col">
            <h1>
              <span>Ilustración</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns bgrid-halves cf">
                {ilustrations}
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="row painting">
          <div className="three columns header-col">
            <h1>
              <span>Pintura</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns bgrid-halves cf">
                {paintings}
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
