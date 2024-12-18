import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.logoContainer}>
            <Text>Designed by</Text>
            <a href="https://wa.link/votm3w" target="_blank"
                rel="noopener noreferrer">
                <Image source={require('../assets/images/Logo GD.png')} style={styles.guladevs} /></a>
        </View>
    )
}

const styles = StyleSheet.create({

    logoContainer: {
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1f2eb',
        borderRadius: 5,
        gap: 10
    },

    guladevs: {
        resizeMode: 'contain',
        width: 100
    }
});


