import React, { useState } from 'react';
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
type Video = {
    id: string,
    thumbnail_url: string
}

const RecommendVideo = ({ data }: { data: Video[] }) => {
    const { width } = Dimensions.get('window')
    const [activeIndex, setActiveIndex] = useState(0)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(scrollOffset / width);
        setActiveIndex(currentIndex);
    }
    return (
        <>
            <View className='flex-row justify-between items-center mt-4'>
                <Text className='text-white font-bold' style={{ fontSize: ms(18) }}>วิดีโอแนะนำ</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={handleScroll}
                contentContainerClassName="flex-row pl-2 gap-x-6">
                {data.map((item) => {
                    return (
                        <View key={item.id} >
                            <Pressable>
                                <View
                                    className='rounded-2xl w-[90vw] aspect-[4/2]'
                                >
                                    <Image className='w-full h-full rounded-xl hover:bg-black' resizeMode="cover" source={{ uri: item.thumbnail_url }} />
                                </View>

                            </Pressable>
                        </View>
                    )
                })}
            </ScrollView>
            <View className='flex-row justify-center mb-6'>
                {data.map((_, index) => (
                    <View
                        key={index}
                        className={`w-1.5 h-1.5 mx-0.5 rounded-xl ${activeIndex === index ? 'bg-blue-300' : 'bg-white'} `}
                    />
                ))}
            </View>
        </>
    )

}
export default RecommendVideo