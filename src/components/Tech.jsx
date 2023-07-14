const Tech = () => {
    return (
      <div className="mt-20">
        <h1 className="mb-1 text-5xl font-bold text-red">Tech Skills</h1>
        <div className="text-sm mt-4 text-justify">
          <p>Found some of the technologies I work with:</p>
          <div className="">
            <div className="box relative w-[200px] h-[200px] bg-[#020223] overflow-hidden ">
              <div className="box__inner animate-fullSpin"></div>
            </div>
          </div>
  
          <div>
            <div>HTML</div>
            <div>JavaScipt</div>
            <div>TypeScript</div>
            <div>CSS</div>
            <div>TailWind CSS</div>
            <div>React.js</div>
            <div>Vite</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>Sequelize</div>
            <div>PostgresSQL</div>
            <div>Git</div>
            <div>GitHub</div>
            <div>Visual Studio Code</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tech;