import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularMoviesQuery, topRatedMoviesQuery, upcomingMoviesQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator
                    color='purple'
                    size={40} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

                { /* Carousel de imágenes */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                { /* Peliculas Populares*/}
                <MovieHorizontalList
                    title='Populares'
                    movies={popularMoviesQuery.data?.pages.flat() ?? []}
                    className='mb-5'
                    loadNextPage={popularMoviesQuery.fetchNextPage} />

                { /* Peliculas Mejor calificadas */}
                <MovieHorizontalList
                    title='Mejor calificadas'
                    movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
                    className='mb-5'
                    loadNextPage={topRatedMoviesQuery.fetchNextPage} />

                { /* Peliculas Próximamente en cines */}
                <MovieHorizontalList
                    title='Próximamente en cines'
                    movies={upcomingMoviesQuery.data?.pages.flat() ?? []}
                    className='mb-5'
                    loadNextPage={upcomingMoviesQuery.fetchNextPage} />

            </View>
        </ScrollView>
    );
}

export default HomeScreen;