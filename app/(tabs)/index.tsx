import SvgTxt from '@/components/svg-text';
import VerticalImageShow from '@/components/vertical-image-show';
import Data from "@/Data.json";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import { useRef } from 'react';
import { Animated, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms, vs } from 'react-native-size-matters';
cssInterop(LinearGradient, {
  className: {
    target: "style",
  },
});

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 200], // เมื่อเลื่อนไปที่ระยะ 0 ถึง 200
    outputRange: [0.1, 0.9], // ให้แผ่นสีดำเข้มขึ้นจาก 0% เป็น 80%
    extrapolate: 'clamp',
  })

  return (
    <View className="flex-1 bg-[#101010] justify-start" >

      {/* header */}
      <SafeAreaView className="absolute top-2 left-0 right-0 z-10">
        <View className='flex-row w-full justify-between px-4 items-center bg-transparent'>
          <Ionicons name="menu" size={ms(30)} color="white" />
          <Image source={require('@/assets/images/logo.png')} style={{ width: ms(30), height: ms(30) }} resizeMode="contain" />
          <Ionicons name="search" size={ms(30)} color="white" />
        </View>
      </SafeAreaView>

      <Animated.ScrollView
        className="flex-1"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        {/* wallpaper */}
        <View className='flex-1 justify-center items-center'>
          <LinearGradient
            colors={['#FFFF00', '#00BFFF', '#00FF00', '#8A2BE2', '#FF0000']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            className='p-[1.5px] rounded-3xl justify-center items-center z-10 absolute '>
            <View className=' bg-white flex-row rounded-3xl justify-center items-center px-4 gap-1'>
              <Text className='text-[#e5001a] font-bold text-xl'>
                ● LIVE
              </Text>
            </View>
          </LinearGradient>
          <Image source={require('@/assets/images/wallpaper.jpg')} resizeMode="cover" style={{ width: '100%', height: vs(180) }} />
          <LinearGradient
            colors={['transparent', 'rgba(16,16,16,0.90)', 'black']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: -2,
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
              backgroundColor: 'black',
              opacity: imageOpacity,
            }}
          />
        </View>

        <View className='flex-2  mx-4 mt-1 gap-y-2 '>
          <View className='flex-row items-center gap-4'>
            <View className='bg-[#e73733] py-1.5 px-3 rounded-md'>
              <Text className="text-white text-xs">• กำลังรับชม</Text>
            </View>
            <Text className='text-white font-bold text-xl mb-1'>ปริศนาฟ้าแลบ</Text>
          </View>
          <Text className='text-[#78c5c4] text-xs '>เวลา 10.30 - 11.00 น.</Text>
          <View className="flex-row items-center justify-end bg-gray-700 rounded-2xl p-6 overflow-hidden h-16">
            <View className='bg-white rounded-2xl px-3 py-1.5'>
              <Text className="text-[#274f83] text-md">ผังรายการ &gt;</Text>
            </View>
          </View>

            {/* Top 10 รายการยอดนิยม */}
          <View className='flex-row justify-between items-center'>
            <Text className='text-white font-bold text-lg '>Top 10 รายการยอดนิยม</Text>
            <Text className='text-white text-sm '>ดูเพิ่มเติม &gt;</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            contentContainerClassName="flex-row pl-2 space-x-6">
            {Data.data.trending_shows.map((item, index) => {
              return (
                <View key={item.id} className='relative pb-6'>
                  <View className='absolute -left-6 bottom-0 z-10'>
                    <SvgTxt text={String(index+1)}/>
                  </View>
                  <VerticalImageShow url={item.poster_url} />
                </View>
              )
            })}
          </ScrollView>



        </View>
      </Animated.ScrollView>
    </View>
  );
}

