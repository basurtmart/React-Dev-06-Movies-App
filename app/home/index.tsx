import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    const { nowPlayingQuery } = useMovies();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
        </View>
    )
}

export default HomeScreen;