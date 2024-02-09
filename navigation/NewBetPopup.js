import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// New Bet Page Component
function NewBetPage({ isVisible, onClose }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Modal Title</Text>
                    <TouchableOpacity onPress={onClose}>
                        <MaterialCommunityIcons name="close" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Text>BBIG RED DOG</Text>
                    <Image source={require('../assets/icons/close.png')} style={{ flex: 1, resizeMode: 'cover' }} />
                </View>
            </View>
        </Modal>
    );
}

// Custom Button Component
function NewBetButton({ onPress }) {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 0,
                left: '50%', // Set the left position to 50% of the container
                marginLeft: -32, // Adjust the marginLeft to half of the button width
                zIndex: 10, // Set a higher z-index to ensure the button appears above the tab bar
                height: 64,
                width: 64,
                borderRadius: 64,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <MaterialCommunityIcons name="plus-circle" color="#886300" size={64} />
        </TouchableOpacity>
    );
}

export { NewBetPage, NewBetButton }