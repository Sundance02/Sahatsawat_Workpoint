import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';

type ShowDetails = {
    id: string;
    title: string;
    description: string;
    live_date: string;
    live_time: string;
    poster_url: string;
}

export default function ShowDetailsBody({data}:{data:ShowDetails}) {
    const [select, setSelect] = useState('episode')
    return (
        <View className='flex-2 mx-6 mt-1 gap-y-4'>
            <View>
                <View className='flex-row justify-between'>
                    <Text className='text-white font-bold' style={{ fontSize: ms(20) }}>{data?.title}</Text>
                    <View className='flex-row items-center gap-x-2 absolute right-0' style={{ top: ms(16) }}>
                        <Image
                            style={{ width: ms(16), height: ms(16) }}
                            source={require("@/assets/images/share.png")}
                            resizeMode="contain"
                        />
                        <Text className='text-white mr-1'>แชร์</Text>
                    </View>
                </View>
                <Text className='text-[#4dcac8]' style={{ fontSize: ms(12) }}>ทุกวัน{data?.live_date} เวลา {data?.live_time} น.</Text>
            </View>

            <View className='relative flex-1'>
                <View className='bg-[#242424] rounded-xl absolute -bottom-2.5 h-[8vw] w-[90%] self-center' />
                <View className='bg-[#333333] rounded-xl px-4 py-4 gap-y-2'>
                    <Text className='text-white font-bold' style={{ fontSize: ms(20) }}>ตอนล่าสุด</Text>
                    <View className='flex-1 flex-row gap-x-2 items-start'>
                        <View className='w-[44vw] aspect-[2/1]'>
                            <Image source={{ uri: data?.poster_url }} resizeMode='cover' className='w-full h-full rounded-xl' />
                        </View>
                        <Text numberOfLines={2} ellipsizeMode="tail" className='flex-1 text-white mt-4' style={{ fontSize: ms(13) }}>
                            EP.123 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatibus!
                        </Text>
                    </View>
                </View>
            </View>

            <View className='flex-row gap-x-2 justify-start items-center mt-8'>
                <Pressable className={`${select === "episode" ? 'bg-white' : 'bg-[#242424]'} px-7 py-1 rounded-2xl`} onPress={() => { setSelect('episode') }}>
                    <Text className={` ${select === "episode" ? 'text-[#999999]' : 'text-[#b9b8b8]'} text-lg`}>ตอน</Text>
                </Pressable>
                <Pressable className={` ${select === "detail" ? 'bg-white' : 'bg-[#242424]'}  px-7 py-1 rounded-2xl`} onPress={() => { setSelect('detail') }}>
                    <Text className={`${select === "detail" ? 'text-[#999999]' : 'text-[#b9b8b8]'} text-lg`}>รายละเอียด</Text>
                </Pressable>
            </View>
            {select === "detail" ?
                <View className='mt-16 flex-row w-full '>
                    <View className='flex-1'>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>รายการ</Text>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>วันที่ออกอากาศ</Text>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>รายละเอียดรายการ</Text>
                    </View>
                    <View className='flex-1'>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>{data?.title}</Text>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>{data?.live_date}</Text>
                        <Text className='text-[#e6e2e2] ' style={{ fontSize: (ms(14)), lineHeight: (ms(18)) }}>{data?.description}</Text>
                    </View>
                </View>
                :
                <View className='mt-16 gap-y-6'>
                    <Text className='text-white mb-2' style={{ fontSize: (ms(18)) }}>ตอนทั้งหมด</Text>
                    {
                        [...Array(10)].map((_, index) => (
                            <View className='flex-row gap-x-3' key={index}>
                                <View className='w-[34vw] rounded-xl aspect-[2/1]'>
                                    <Image source={{ uri: data?.poster_url }} className='w-full h-full' resizeMode='cover' />
                                </View>
                                <Text numberOfLines={2} ellipsizeMode="tail" className='flex-1 text-white' style={{ fontSize: ms(14) }}>EP.{index + 1} Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                            </View>
                        ))
                    }
                </View>
            }

        </View>
    )
}