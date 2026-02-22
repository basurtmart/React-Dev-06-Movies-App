import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieReponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieReponse>(`/${id}`);

        // console.log('Raw movie data from API:', JSON.stringify(data, null, 2));
        console.log('Película - HTTP cargada');
        const movie = MovieMapper.fromTheMovieDBMovieToCompleteMovie(data);

        return movie;
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        throw 'Failed to fetch movie by ID';
    }
}