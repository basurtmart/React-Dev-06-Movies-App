import { Cast } from '@/infrastructure/interfaces/cast.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ActorCard from './ActorCard';

interface Props {
    cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
    return (
        <View className='mt-5 mb-20'>
            <Text className="font-bold text-2xl px-5">Actores</Text>

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