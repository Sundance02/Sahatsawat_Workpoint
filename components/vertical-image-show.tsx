import React from 'react'
import { Image, Platform, Pressable, View } from 'react-native'

export default function VerticalImageShow({ url }: { url: string }) {
    return (
        <Pressable>
            {({ pressed }) => (
                <View
                    className={`rounded-2xl w-[28vw] aspect-[2/3]
                  ${pressed ? 'opacity-80' : 'opacity-100'}`}
                    style={
                        pressed
                            && Platform.select({
                                ios: {
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 10 },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 15,
                                    elevation: 10,
                                },
                                android: { elevation: 10 }
                            })
                    }
                >
                    <Image className='w-full h-full rounded-xl hover:bg-black' resizeMode="cover" source={{ uri: url }} />
                </View>
            )}
        </Pressable>
    )
}