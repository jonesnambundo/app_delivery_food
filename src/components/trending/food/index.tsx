import { View, Pressable, Text, Image } from 'react-native';
import { FoodProps } from '..';
import { Ionicons } from '@expo/vector-icons';

export function CardHorizontalFood({food}: { food: FoodProps }) {
    return (
        <Pressable className='flex flex-col rounded-xl'>
            <Image
            source={{ uri: food.image }}
            className="w-44 h-36 rounded-xl"
        />
            <Text>{food.name}</Text>

        <View className='flex flex-row bg-netral-90/90 rounded-full absolute top-2 right-3 px-2 py-1
        items-center justify-center'>

            <Ionicons name="star" size={14} color="#ca8a04" />
            <Text className='text-white text-sm'>food.rating</Text>

        </View>
        </Pressable>
    );
}