import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Carrusel() {
    return (
        <Swiper
            style={styles.wrapper}
            loop={false}
            showsPagination={false}
            showsButtons={true}
        >
            <View style={styles.slide}>
                <Image source={require('../assets/images/ramiro-fondo-salmon.png')} style={styles.petImage} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../assets/images/ramiro-fondo-violeta.png')} style={styles.petImage} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../assets/images/ramiro-fondo-verde.png')} style={styles.petImage} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../assets/images/ramiro-fondo-celeste.png')} style={styles.petImage} />
            </View>

            <View style={styles.slide}>
                <Image source={require('../assets/images/ramiro-fondo-amarillo.png')} style={styles.petImage} />
            </View>

        </Swiper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {
        height: '50%'
    },

    dataContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: '#f4f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingVertical: 15
    },

    petImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    }
});



