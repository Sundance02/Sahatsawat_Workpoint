import SvgTxt from '@/components/svg-text';
import { useRouter } from "expo-router";
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';


type ShowData = {
    id: string,
    poster_url?: string,
    title?: string,
    thumbnail_url?: string,
}

export default function Showlist({ heading, data, aspect, width, showNumbers = false, gapx, showTitle = false, routePath }:
    { heading: string, data: ShowData[], aspect: string, width: string, showNumbers?: boolean, gapx: string, showTitle?: boolean, routePath?:string }) {
    const router = useRouter();
    return (
        <>
            <View className='flex-row justify-between items-center'>
                <Text className='text-white font-bold' style={{ fontSize: ms(18) }}>{heading}</Text>
                <Text className='text-white' style={{ fontSize: ms(14) }}>ดูเพิ่มเติม &gt;</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                contentContainerClassName={`flex-row pl-2 ${gapx}`}>
                {data.map((item, index) => {
                    return (
                        <View key={item.id} className={`relative pb-6 ${width} gap-y-2`}>
                            {showNumbers &&
                                <View className='absolute -left-6 bottom-0 z-10'>
                                    <SvgTxt text={String(index + 1)} />
                                </View>
                            }

                            <Pressable
                                onPress={() => {
                                    router.push({
                                        pathname: routePath as any ,
                                        params: { id: item.id }
                                    })
                                }}
                            > 
                                {({ pressed }) => ( 
                                    <View className={`rounded-2xl  ${width} ${aspect} ${pressed ? 'opacity-80' : 'opacity-100'}`}>
                                        <Image className='w-full h-full rounded-xl hover:bg-black' resizeMode="cover" 
                                        source={{ uri: item.thumbnail_url ?? item.poster_url }} />
                                    </View>
                                )}
                            </Pressable>
                            {showTitle &&
                                <Text className='text-white' numberOfLines={2} ellipsizeMode="tail" style={{fontSize:ms(11)}}>
                                    {item.title}
                                </Text>
                            }
                        </View>
                    )
                })}
            </ScrollView>
        </>
    )
}