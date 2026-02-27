import { Cast } from '@/infrastructure/interfaces/cast.interface';
import React from 'react';
import { FlatList, View } from 'react-native';
import ActorCard from './ActorCard';

interface Props {
    cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
    return (
        <View>
            <FlatList
                horizontal
                data={cast}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) => (
                    <ActorCard actor={item} />
                )}
            />
        </View>
    )
}

export default MovieCast