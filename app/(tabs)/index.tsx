import { StyleSheet, Text, View, Image } from 'react-native';


export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../../assets/images/ramiro.jpg')} style={styles.petImage} />
        </View>

        <View style={styles.dataContainer}>

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


          {/* <a style={styles.links} href="https://wa.link/kh6loz">Escribile a mi papá</a>
          <Text style={styles.textRandom}>Mi casa: Tucuman Nro. 314.</Text>
          <a style={styles.links} href="https://maps.app.goo.gl/EqoRvKZCxvtx44rv6">Ubicacion de mi casa.</a> */}

          <View style={styles.biopicContainer}>
            <Text style={styles.biopicText}>Soy muy bueno y amigable. Me llevo muy bien con los niños pero a veces puedo ser un poco bruto. Me gusta jugar. Si me llamas y no respondo es por que soy sordo.</Text>
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.whatsappButton}>
            <a href="https://wa.link/kh6loz" target="_blank"
                rel="noopener noreferrer"><Image source={require('../../assets/icons/whatsapp.svg')} style={styles.icon}/></a>
            </View>
            <View style={styles.locationButton}>
            <a href="https://maps.app.goo.gl/EqoRvKZCxvtx44rv6" target="_blank"
                rel="noopener noreferrer"><Image source={require('../../assets/icons/home.svg')} style={styles.icon}/></a>
            </View>
          </View>

          <View style={styles.logoContainer}>
            <Text>Designed by</Text>
            <a href="https://wa.link/votm3w" target="_blank"
                rel="noopener noreferrer">
            <Image source={require('../../assets/images/Logo GD.png')} style={styles.guladevs}  /></a>
            
          </View>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textRandom: {
    fontSize: 12,
    fontFamily: 'san-serif'
  },

  imgContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    width: '90%',
    height: '23%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  dataContainer: {
    width: '100%',
    height: '60%',
    backgroundColor: '#82e0aa',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 15
  },

  petImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },

  biopicText: {
    fontSize: 14,
    fontWeight: 400,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'san-serif'
  },

  links: {
    width: '85%',
    height: '12%',
    backgroundColor: 'white',
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    fontFamily: 'san-serif',
    fontSize: 12,
    textDecorationLine: 'none',
    color: 'black'
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
  },

  biopicContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnContainer: {
    width: '90%',
    height: '23%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',    
    padding: 10,
    gap:5,
     justifyContent: 'center',
    alignItems: 'center'
  },

  whatsappButton: {
    width: '50%',
    height: '100%',
    backgroundColor: '#2ecc71',
    // backgroundColor: '#00a884',
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
    backgroundColor: 'white',
    borderRadius: 5,
    gap: 10

  },

  guladevs: {
    resizeMode: 'contain',
    width: 100
  }
});
