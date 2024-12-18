import { StyleSheet, Text, View } from 'react-native';

export default function DataInfo() {
    return (
        <View style={styles.textContainer}>

            <View style={styles.leftDiv}>
                <View>
                    <Text style={styles.title}>Nombre</Text>
                    <Text style={styles.petData}>Ramiro</Text>
                </View>
                <View>
                    <Text style={styles.title}>Raza</Text>
                    <Text style={styles.petData}>Border Collie</Text>
                </View>
            </View>

            <View style={styles.rightDiv}>
                <View>
                    <Text style={styles.rightTitle}>Edad</Text>
                    <Text style={styles.petData}>9 Años</Text>
                </View>
                <View>
                    <Text style={styles.rightTitle}>Sexo</Text>
                    <Text style={styles.petData}>Masculino</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({   

    textContainer: {
        width: '90%',
        height: '23%',
        backgroundColor: '#d1f2eb',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    leftDiv: {
        width: '50%',
        height: '100%',
        borderStartStartRadius: 10,
        borderEndStartRadius: 10,
        justifyContent: 'space-around',
    },

    rightDiv: {
        width: '50%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        borderEndEndRadius: 10,
        borderStartEndRadius: 10
    },

    title: {
        fontSize: 9,
        color: '#99a3a4'
    },

    rightTitle: {
        fontSize: 9,
        color: '#99a3a4',
        textAlign: 'right'
    },

    petData: {
        fontSize: 13,
        fontWeight: 800
    }
});



