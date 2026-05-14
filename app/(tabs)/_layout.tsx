import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor:"white",
        tabBarStyle:{
          backgroundColor:"#101010",
          height:60,
          borderTopWidth:0
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ดูทีวีสด',
          headerTintColor : "#4d4d4d",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="tv.fill" color={color} 
          />,
        }}
      />
    </Tabs>
  );
}
