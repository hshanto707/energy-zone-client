import React, { useEffect, useState } from 'react';
import Program from '../Program/Program';
import './ProgramsBody.css'

const ProgramsBody = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('./programs.json')
      .then(res => res.json())
      .then(data => setPrograms(data));
  }, [])
  return (
    <div className="container all-programs">
      {
        programs.map(program => <Program program={program} key={program.id}></Program>)
      }
    </div>
  );
};

export default ProgramsBody;