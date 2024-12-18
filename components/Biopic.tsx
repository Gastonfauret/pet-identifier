import { StyleSheet, Text, View } from 'react-native';

export default function Biopic() {
    return (
        <View style={styles.biopicContainer}>
            <Text style={styles.biopicText}>Soy muy bueno y amigable. Me llevo muy bien con los niños pero a veces puedo ser un poco bruto. Me gusta jugar. Si me llamas y no respondo es por que soy sordo.</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    biopicContainer: {
        width: '90%',
        height: '30%',
        backgroundColor: '#d1f2eb',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    biopicText: {
        fontSize: 14,
        fontWeight: 400,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'san-serif'
    },
});



