import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const upcomingMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming', {
            params: {
                page: page,
            }
        });
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        // console.log(JSON.stringify(movies, null, 2));
        return movies;
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        throw 'Failed to fetch upcoming movies';
    }
}