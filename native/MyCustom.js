import React, { useState, useEffect } from 'react';
import { DeviceEventEmitter, View, Text, Button } from 'react-native';
import { NativeModules } from 'react-native';

const MyCustomComponent = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        
        const eventListener = DeviceEventEmitter.addListener('buttonClickEvent', (eventData) => {
            setEventData(eventData);
        });

        // Unsubscribe from the event when the component unmounts
        return () => {
            eventListener.remove();
        };
    }, []);

    const simulateButtonClick = () => {
        // Trigger the native module to simulate a button click
        NativeModules.MyCustomModule.simulateButtonClick();
    };

    return (
        <View>
            <Button
                title="Simulate Button Click"
                onPress={simulateButtonClick}
            />
            <Text>Event Data: {eventData}</Text>
        </View>
    );
};

export default MyCustomComponent;
