const HeroesList = (props) => {
  return (
    <>
      <h1>Heroes List</h1>
      {props.heroes.map((hero) => {
        return (
          <>
            <p>{hero.name}</p>
            <p>{hero.power}</p>
            <img src={hero.image} alt={hero.name}/>
          </>
        );
      })}
    </>
  );
};

export default HeroesList;
