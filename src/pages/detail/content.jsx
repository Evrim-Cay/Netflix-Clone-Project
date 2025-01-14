import List from "./list";
import millify from "millify";

const Content = ({movie}) => {
  console.log(movie);
  return (
    <div className="my-10 grid md:grid-cols-2 gap-5 md:gap-10">
      <div>
        <List title="Kategoriler" arr={movie.genres} />
        <List title="Konusulan Diller" arr={movie.spoken_languages} />
        <List title="Yapimci Sirketler" arr={movie.production_companies} />
        <List title="Yapimci Ulkeler" arr={movie.production_countries} />
      
      </div>
      <div className="flex flex-col gap-5">
        <p>{movie.overview}</p>
        <p>
          <span>Butce: </span>
          <span className="text-green-500 font-semibold">{movie.budget === 0 ? "Bilinmiyor" : "$" + millify (movie.budget)}</span>
        </p>

        <p>
          <span>Hasilat: </span>
          <span className="text-green-500 font-semibold">{movie.revenue === 0 ? "Bilinmiyor" : "$" + millify (movie.revenue)}</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
