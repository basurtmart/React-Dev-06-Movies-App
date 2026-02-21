import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        // console.log(JSON.stringify(movies, null, 2));
        return movies;
    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        throw 'Failed to fetch now playing movies';
    }
}