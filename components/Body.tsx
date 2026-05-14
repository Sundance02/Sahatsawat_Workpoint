import RecommendVideo from '@/components/RecommendVideo';
import Showlist from '@/components/Showlist';
import Data from "@/Data.json";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
export const Body = () => {
  return (
    <View className='flex-2 mx-4 mt-1 gap-y-3 '>
          <View className='flex-row items-center gap-4'>
            <View className='bg-[#e73733] py-1.5 px-3 rounded-md'>
              <Text className="text-white " style={{ fontSize: ms(12) }}>• กำลังรับชม</Text>
            </View>
            <Text className='text-white font-bold mb-1' style={{ fontSize: ms(20) }}>ปริศนาฟ้าแลบ</Text>
          </View>
          <Text className='text-[#4dcac8]' style={{ fontSize: ms(12) }}>เวลา 10.30 - 11.00 น.</Text>
          <View className="flex-row items-center justify-end bg-gray-700 rounded-2xl px-6 py-5 overflow-hidden">
            <View className='bg-white rounded-2xl px-3 py-1.5'>
              <Text className="text-[#274f83] " style={{ fontSize: ms(14) }}>ผังรายการ &gt;</Text>
            </View>
          </View>

          {/* Top 10 รายการยอดนิยม */}
          <Showlist heading='Top 10 รายการยอดนิยม' data={Data.data.shows} aspect="aspect-[2/3]" width='w-[28vw]' showNumbers={true} gapx="gap-x-6" routePath='/show_details/[id]' />

          {/* วิดีโอแนะนำ */}
          <RecommendVideo data={Data.data.recommended_videos} />

          {/* รายการย้อนหลังล่าสุด */}
          <LinearGradient
            colors={['#671695', '#1f1c31', '#32757b']}
            className='gap-y-2 -mx-4 p-4'
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            <Showlist heading='รายการย้อนหลังล่าสุด' data={Data.data.recommended_videos} aspect="aspect-[4/2]" width='w-[40vw]' gapx="gap-x-3" />
          </LinearGradient>

          {/* ประกวดร้องเพลง*/}
          <Showlist heading='ประกวดร้องเพลง' data={Data.data.shows} aspect="aspect-[2/3]" width='w-[28vw]' gapx="gap-x-3" routePath='/show_details/[id]'/>

          {/* รายการซิทคอม*/}
          <LinearGradient
            colors={['#2558e2', '#504ae2', '#9932e5']}
            className='gap-y-2 -mx-4 p-4'
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            <Showlist heading='รายการซิทคอม' data={Data.data.shows} aspect="aspect-[2/3]" width='w-[28vw]' gapx="gap-x-3" routePath='/show_details/[id]'/>
          </LinearGradient>

          {/* เพลงล่าสุด*/}
          <Showlist heading='เพลงล่าสุด' data={Data.data.recommended_videos} aspect="aspect-[4/2]" width='w-[35vw]' showTitle={true} gapx="gap-x-3" />

          {/* ข่าวสาร*/}
          <Showlist heading='ข่าวสาร' data={Data.data.recommended_videos} aspect="aspect-[4/2]" width='w-[35vw]' showTitle={true} gapx="gap-x-3" />
        </View>
  )
}

export default Body