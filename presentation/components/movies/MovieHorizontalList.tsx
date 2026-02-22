import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;

    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {
    const isLoading = useRef(false);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;

        isLoading.current = true;

        // TODO: Load more movies here and set isLoading.current to false once done
        console.log('Load more movies');
        loadNextPage && loadNextPage();
    }

    return (
        <View className={`${className}`}>
            {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}


            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster />
                )}
                onScroll={onScroll} />
        </View>
    )
}

export default MovieHorizontalList