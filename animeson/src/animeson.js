import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    }, [fadeAnim])
    console.log(fadeAnim,'fa');
    return (
        <Animated.View                 // Special animatable View
            style={{
                backgroundColor: '#220453',
                opacity: fadeAnim,         // Bind opacity to animated value
                color: '#fff',
            }}
        >
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 10, color: '#fff' }}>Fading in</Text>
        </Animated.View>
    );
}

export default FadeInView