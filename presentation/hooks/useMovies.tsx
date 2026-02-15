import { nowPlayingAction } from "@/core/ations/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24,
    });

    return {
        nowPlayingQuery,
    }
}