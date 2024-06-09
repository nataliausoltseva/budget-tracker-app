import { useContext, useRef } from "react"
import { Animated, Easing, StyleSheet, TouchableOpacity, View } from "react-native"
import CustomText from "./CustomText"
import { AppContext } from "../context/AppContext"

type Props = {
    isChecked: boolean,
    onChange: () => void,
    label: string,
}

const CustomToggle = ({ isChecked = false, onChange, label }: Props) => {
    const appState = useContext(AppContext);
    const positionButton = useRef(new Animated.Value(0)).current;
    const positionInterPol = positionButton.interpolate({ inputRange: [0, 1], outputRange: [0, 30] });

    const startAnimToOff = () => {
        Animated.timing(positionButton, {
            toValue: 0,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    };

    const startAnimToOn = () => {
        Animated.timing(positionButton, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()

    };

    const onPress = () => {
        if (isChecked) {
            startAnimToOff();
        } else {
            startAnimToOn();
        }
        onChange();
    };

    return (
        <View>
            <CustomText>{label}</CustomText>
            <TouchableOpacity style={{ height: 30, width: 60 }} activeOpacity={0.9} onPress={onPress} >
                <Animated.View style={[styles.mainStyles, { backgroundColor: appState.isDarkMode ? "#443472" : "white", borderColor: appState.isDarkMode ? "#A78DFF" : "#707070", borderWidth: 1 }]} >
                    <Animated.View style={[styles.basicStyle, { transform: [{ translateX: positionInterPol }], backgroundColor: appState.isDarkMode ? "white" : "#01B0E6" }]} />
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomToggle;

const styles = StyleSheet.create({
    basicStyle: {
        height: 20,
        width: 20,
        borderRadius: 20,
        marginTop: 4,
        marginLeft: 5,
    },
    mainStyles: {
        borderRadius: 30,
        height: 30,
        width: 60,
    },
});