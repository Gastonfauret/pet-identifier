
import Biopic from '@/components/Biopic';
import BtnsComponent from '@/components/BtnsComponent';
import Carrusel from '@/components/Carrusel';
import DataInfo from '@/components/DataInfo';
import Footer from '@/components/Footer';
import { StyleSheet, View, } from 'react-native';

export default function MainPage() {
    return (
        <View style={styles.container}>
            <Carrusel />
            <View style={styles.dataContainer}>
                <DataInfo />
                <Biopic />
                <BtnsComponent />
                <Footer />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
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
});