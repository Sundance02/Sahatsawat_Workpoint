import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Image, ImageSourcePropType, Text, View } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

export default function Hero({ scrollY, wallpaper_url, show_live_logo, opacityRange }: 
    { scrollY: Animated.Value, wallpaper_url: ImageSourcePropType, show_live_logo: Boolean, opacityRange:number }) {
    const imageOpacity = scrollY.interpolate({
        inputRange: [0, opacityRange],
        outputRange: [0.1, 0.95],
        extrapolate: 'clamp',
    })
    return (
        <View className='flex-1 justify-center items-center'>
            {show_live_logo &&
                <LinearGradient
                    colors={['#FFFF00', '#00BFFF', '#00FF00', '#8A2BE2', '#FF0000']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    className='p-[1.5px] rounded-3xl justify-center items-center z-10 absolute '>
                    <View className=' bg-white flex-row rounded-3xl justify-center items-center px-3 gap-1'>
                        <Text className='text-[#e5001a] font-bold' style={{ fontSize: ms(16), lineHeight: ms(20) }}>
                            ● LIVE
                        </Text>
                    </View>
                </LinearGradient>
            }
            <Image className='w-full' source={wallpaper_url}
                resizeMode="cover" style={{ height: vs(260) }} />
            <LinearGradient
                colors={['transparent', 'rgba(16,16,16,0.92)', '#101010']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -1,
                    height: 80,
                }}
            />
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: -1,
                    backgroundColor: '#101010',
                    opacity: imageOpacity,
                }}
            />
        </View>
    )
}
