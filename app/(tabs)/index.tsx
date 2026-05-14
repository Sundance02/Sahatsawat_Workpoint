import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/hero';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind';
import { useRef } from 'react';
import { Animated, View } from 'react-native';
import { vs } from 'react-native-size-matters';
cssInterop(LinearGradient, {
  className: {
    target: "style",
  },
});

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current
  const opacityRange = vs(190)

  return (
    <View className="flex-1 bg-[#101010] justify-start">
      <StatusBar style='light'/>

      {/* header */}
      <Header scrollY={scrollY}/>

      <Animated.ScrollView
        className="flex-1"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        {/* hero */}
        <Hero show_live_logo={true} scrollY={scrollY} opacityRange={opacityRange} wallpaper_url={require('@/assets/images/wallpaper.jpg')} />

        {/* body */}
        <Body/>

        {/* footer */}
        <Footer/>
      </Animated.ScrollView>
    </View>
  );
}

