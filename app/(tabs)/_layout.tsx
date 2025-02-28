import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerShadowVisible: false,
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    title: 'Category',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'list' : 'list-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="suggestion"
                options={{
                    title: 'Suggestion',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'mail-open' : 'mail-open-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
