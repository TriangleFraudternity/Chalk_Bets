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
import {GroupsDropdown} from "./GroupsDropdown.js";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// New Bet Page Component
function NewGroupPopup({isVisible, onClose}) {

    const [groupName, setGroupName] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const [channelName, setChannelName] = useState("");

    const handleCreateChannel = () => {
        // Your logic to create the channel
        console.log("Creating channel:", channelName);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Create New Channel</Text>

                </View>
                <TouchableOpacity onPress={onClose}>
                    <MaterialCommunityIcons name="close" color="#FFF" size={24} />
                </TouchableOpacity>
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        placeholder="Channel Name"
                        value={channelName}
                        onChangeText={text => setChannelName(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCreateChannel}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
NewGroupPopup.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
    },
    header: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "left",
        padding: 16,
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    content: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 20,
        elevation: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4a154b",
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export {NewGroupPopup};
