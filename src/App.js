import {jsPDF} from 'jspdf';
import {ENG, SPA} from "./config/CVInfo";
import {List, Progress, Text, TimeLine, Title} from './components/index';

const pageSize = {
  width: 1200,
  height: 1400,
  unit: 'px',
};

const pageStyle = {
  width: pageSize.width + pageSize.unit,
  height: (pageSize.height - 1) + pageSize.unit,
};

const pdfOptions = {
  html2canvas: {
    scale: 1,
  },
};

const renderHobby = el => (
  <Text className="col-6">{el}</Text>
);

const renderContact = ([key, val]) => (
  <div className="row">
    <span className="col-3">{key}:</span>
    <span className="col-9">{val}</span>
  </div>
);

const CV = ({id, titles = ENG.titles, name = ENG.name, brief, about, phrase,
  contact = ENG.contact, skills = ENG.skills, languages, hobbies, experience, education,
  certifications = ENG.certifications, techSkills = ENG.techSkills, note = ENG.note}) => (
  <div id={id} className="text-light">
    <div className="row m-0 bg-dark position-relative" style={pageStyle}>
      <section className="col-4 bg-secondary p-5">
        <img src="Photox512.jpg" alt="Me" className="w-50 mx-auto d-block rounded-circle" />
        <h1 className="mt-4 mb-3 text-center text-primary">{name}</h1>
        <h5 className="mt-3 mb-2 text-center">{brief}</h5>
        <hr className="mt-3 mb-4 pb-1 bg-light rounded" />
        <Title>{titles.about}</Title>
        <Text>{about}</Text>
        <p className="my-2 fst-italic">{phrase}</p>
        <Title>{titles.contact}</Title>
        <List data={contact} renderItem={renderContact} />
        <Title>{titles.skills}</Title>
        <List data={skills} />
        <Title>{titles.languages}</Title>
        <List data={languages} />
        <Title>{titles.hobbies}</Title>
        <div className="row">
          <List data={hobbies} renderItem={renderHobby} />
        </div>
      </section>
      <section className="col-8 p-5">
        <Title highlight>{titles.experience}</Title>
        <TimeLine data={experience} />
        <Title highlight>{titles.education}</Title>
        <TimeLine data={education} />
        <Title>{titles.complementaryEducation}</Title>
        <TimeLine data={certifications} />
        <Title highlight>{titles.techSkills}</Title>
        <div className="row my-4">
          <List data={techSkills} renderItem={renderSkills} />
        </div>
      </section>
      <p className="position-absolute start-0 bottom-0 ps-5 mb-3 text-muted">
        {note}
      </p>
    </div>
  </div>
);

const renderSkills = el => (
  <div className="col-6">
    <div className="row my-1">
      <div className="col">
        <p className="mb-0">{el.name}</p>
      </div>
      <div className="col y-auto">
        <Progress value={el.level} />
      </div>
    </div>
  </div>
);

const onSave = () => {
  ['SPA'].forEach(lang => {
    let id = `CV-${lang}`;
    let doc = new jsPDF('p', pageSize.unit, [pageSize.width, pageSize.height]);
    doc.setProperties({title: id});
    doc.html(document.getElementById(id), pdfOptions).output()
      .then(() => doc.save(id + ".pdf"));
  });
};

const App = () => (
  <div className="bg-black d-flex flex-column align-items-center">
    {
      /*
      <CV id="CV-ENG" {...ENG} />
      <hr />
       */
    }
    <CV id="CV-SPA" {...SPA} />
    <button onClick={onSave}
      className="btn btn-light btn-lg position-fixed bottom-0 start-50 translate-middle">
      Save
    </button>
  </div>
);

export default App;
