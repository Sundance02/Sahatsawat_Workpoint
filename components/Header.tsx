import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms, vs } from 'react-native-size-matters';
export const Header = ({scrollY}:{scrollY:Animated.Value}) => {
    const opacityRange = vs(190)
    const headerBgOpacity = scrollY.interpolate({
        inputRange: [0, opacityRange - 1, opacityRange],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
    });
    return (
        <SafeAreaView className="absolute left-0 right-0 z-10">
            <Animated.View className='bg-[#101010] absolute top-0 left-0 right-0 bottom-0' style={{ opacity: headerBgOpacity }} />
            <View className='flex-row w-full justify-between px-4 items-center'>
                <Ionicons name="menu" size={ms(30)} color="white" />
                <Image source={require('@/assets/images/logo.png')} style={{ width: ms(30), height: ms(30) }} resizeMode="contain" />
                <Ionicons name="search" size={ms(30)} color="white" />
            </View>
        </SafeAreaView>
    )
}

export default Header