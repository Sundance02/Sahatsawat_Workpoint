import Hero from '@/components/hero';
import ShowDetailsBody from '@/components/showDetailsBody';
import Data from '@/Data.json';
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
export default function ShowDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const scrollY = useRef(new Animated.Value(0)).current
    const data = Data.data.shows.find((item) => item.id == id)
    const opacityRange = vs(190)
    return (
        <View className="flex-1 bg-[#101010] justify-start">
            <Animated.ScrollView
                className="flex-1"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false },
                )}
                scrollEventThrottle={16}
            >
                {/* Hero */}
                <Hero opacityRange={opacityRange} show_live_logo={false} scrollY={scrollY} wallpaper_url={data ? { uri: data.poster_url } : require('@/assets/images/wallpaper.jpg')} />
                <Pressable onPress={() => { router.back() }} className='absolute' style={{ top: vs(50), left: s(14) }}>
                    <Text className='text-white text-4xl'>←</Text>
                </Pressable>
                {/* Body */}
                {data && <ShowDetailsBody data={data}/>}


            </Animated.ScrollView>
        </View>
    )
}