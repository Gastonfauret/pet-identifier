import { StyleSheet, Text, View, Image } from 'react-native';

export default function BtnsComponent () {
  return (
    <View style={styles.btnContainer}>
                <View style={styles.whatsappButton}>
                  <a href="https://wa.link/kh6loz" target="_blank"
                    rel="noopener noreferrer"><Image source={require('../assets/icons/whatsapp.svg')} style={styles.icon} /></a>
                </View>
                <View style={styles.locationButton}>
                  <a href="https://maps.app.goo.gl/EqoRvKZCxvtx44rv6" ><Image source={require('../assets/icons/home.svg')} style={styles.icon} /></a>
                </View>
              </View>
  )
}

const styles = StyleSheet.create({   
  
    btnContainer: {
      width: '90%',
      height: '23%',
      backgroundColor: '#d1f2eb',
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    whatsappButton: {
      width: '50%',
      height: '100%',
      backgroundColor: '#2ecc71',
      justifyContent: 'center',
      alignItems: 'center',
      borderStartStartRadius: 7,
      borderEndStartRadius: 7
    },
  
    locationButton: {
      width: '50%',
      height: '100%',
      backgroundColor: '#52be80',
      justifyContent: 'center',
      alignItems: 'center',
      borderEndEndRadius: 7,
      borderStartEndRadius: 7
    },
  
    icon: {
      resizeMode: 'contain',
      width: 40
    },
  
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
  });
  


