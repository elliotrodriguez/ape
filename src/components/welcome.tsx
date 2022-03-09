import React from 'react';
import { Text, View } from "react-native";

const Welcome = ({message}) => {
    return (
        <View testID="welcomeMessage" accessibilityLabel="welcomeMessage" style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 24
            }}>{message}</Text>
        </View>
    )
}

export default Welcome;