import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/the-movie-db/credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number | string): Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
        var result = data.cast.map(actor => CastMapper.fromMovieDBCastToEntity(actor));
        console.log('Movie cast data:', JSON.stringify(result, null, 2)); // Debug log to inspect the data structure
        return result;
    } catch (error) {
        console.error('Error fetching movie cast:', error);
        throw 'Failed to fetch movie cast';
    }
}