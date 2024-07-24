import useGenres from "../hooks/useGenres";

const GenreList = () => {

    const { genres, error, isLoading } = useGenres();
    console.log("genress****", genres);
    
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
