import { Image, Pressable, Text, View } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantItem({item}: {item: RestaurantsProps}) {
    return (
        <Pressable className='flex flex-col items-center justify-center'
        onPress={() => console.log("Clicou no Restaurante" + item.name)}
        >
            <Image 
            source={{ uri:item.image}}
            className ='w-20 h-20 rounded-full'
            
            />
            <Text className='text-sm mt-2 text-center leading-4 text-black' 
            numberOfLines={2}
            >
                {item.name}</Text>
        </Pressable>
    );
}