import { View, StyleSheet, Image } from "react-native"


export default function LoadingScreen () {
  return (
    <View style={styles.container}>
        <View style={styles.LogoContainer}>
            <Image source={require('../../assets/images/logo-scanid.png')} style={styles.logo}/>
        </View>
        <View style={styles.loader}></View>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    LogoContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo:{
        resizeMode: 'center',
        width: '80%',
        height: '100%',
    },

    loader:{        
    }
})

