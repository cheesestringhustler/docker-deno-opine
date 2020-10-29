import { TypeOpine } from "../../deps.ts";
import { movieType, swapiFilmsDTO } from "./types.ts";

const get = async (req: TypeOpine.Request, res: TypeOpine.Response) => {
  try {
    let movies: movieType[] = [];
    const request = await fetch("https://swapi.dev/api/films/");
    const response = await request.json();

    response.results.forEach((swapiFilm: swapiFilmsDTO) => {
      let film = {} as movieType;

      film.id = swapiFilm.episode_id;
      film.title = swapiFilm.title;
      film.release_date = swapiFilm.release_date;
      film.director = swapiFilm.director;
      film.producer = swapiFilm.producer;

      movies.push(film);
    });

    res.setStatus(200).json(movies);
  } catch (err) {
    res.setStatus(500).json({
      succuss: false,
      message: "Internal server error.",
    });
  }
};

export default {
  get,
};
