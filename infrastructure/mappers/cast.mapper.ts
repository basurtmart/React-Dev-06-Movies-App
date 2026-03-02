import { Cast } from '../interfaces/cast.interface';
import { MovieDBCast } from '../interfaces/the-movie-db/credits.response';

export class CastMapper {
    static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://img.icons8.com/office/160/gender-neutral-user.png', // Imagen por defecto si no hay avatar disponible
        };
    }
}