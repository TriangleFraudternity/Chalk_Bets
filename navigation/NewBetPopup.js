import {
    Image,
    Modal,
    View,
    Button,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Switch
} from "react-native";
import {React, useState } from "react";
import PropTypes from "prop-types";
import {GroupsDropdown} from "../pages/Groups/GroupsDropdown.js";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// New Bet Page Component
function NewBetPopup({isVisible, onClose}) {

    const [betName, setBetName] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={{flex: 1, backgroundColor: "#400002"}}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "left",
                        padding: 16,
                        alignItems: "flex-start",
                    }}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#FFF"}}>
                        Create New Bet
                    </Text>
                    <Image source={require("../assets/Money.png")} style={{width: 24, height: 24}} />


                    <TouchableOpacity onPress={onClose}>
                        <MaterialCommunityIcons name="close" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#FFF",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        padding: 16
                    }}>
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>Bet Name</Text>
                    {/* TextInput for entering bet name */}
                    <TextInput
                        style={{ marginLeft: 5, height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 16, color: "black" }}
                        onChangeText={text => setBetName(text)}
                        value={betName}
                        placeholder="Name your bet"
                        placeholderTextColor="gray"
                    />
                    <GroupsDropdown/>
                    <Switch
                        trackColor={{ false: "#FF0000", true: "#00FF00" }}
                        thumbColor={isEnabled ? "#00FF00" : "#FF0000"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </Modal>
    );
}
NewBetPopup.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

// Custom Button Component
function NewBetButton({onPress}) {
    return (
        <TouchableOpacity
            style={{
                position: "absolute",
                bottom: 0,
                left: "50%", // Set the left position to 50% of the container
                marginLeft: -32, // Adjust the marginLeft to half of the button width
                zIndex: 10, // Set a higher z-index to ensure the button appears above the tab bar
                height: 64,
                width: 64,
                borderRadius: 64,
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={onPress}>
            <MaterialCommunityIcons name="plus-circle" color="#886300" size={64} />
        </TouchableOpacity>
    );
}
NewBetButton.propTypes = {
    onPress: PropTypes.func.isRequired,
};

export {NewBetPopup, NewBetButton};
