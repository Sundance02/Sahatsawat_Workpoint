import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'

export default function SocialLogo({image_source}:{image_source:ImageSourcePropType}) {
    return (
        <View className='bg-[#414141] w-[9vw] h-[9vw] rounded-full overflow-hidden'>
            <Image resizeMode='cover' className='w-full h-full' source={image_source} />
        </View>
    )
}