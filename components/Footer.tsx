import SocialLogo from '@/components/SocialLogo';
import React from 'react';
import { View } from 'react-native';
export const Footer = () => {
    return (
        <View className='flex-row mt-16 gap-x-4 mb-3 justify-center'>
            <SocialLogo image_source={require('@/assets/images/youtube.png')} />
            <SocialLogo image_source={require('@/assets/images/facebook.png')} />
            <SocialLogo image_source={require('@/assets/images/ig.png')} />
            <SocialLogo image_source={require('@/assets/images/X.png')} />
        </View>
    )
}

export default Footer;