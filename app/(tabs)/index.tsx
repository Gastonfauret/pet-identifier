import { StyleSheet, Text, View, Image } from 'react-native';





export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>

          <Image source={require('../../assets/images/ramiro.jpg')} style={styles.petImage} />

        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.textRandom}>Nombre: Ramiro</Text>
          <Text style={styles.textRandom}>Raza: Border Collie.</Text>
          <Text style={styles.textRandom}>Edad: 9 años.</Text>
          <Text style={styles.textRandom}>Color: Blanco y negro.</Text>
          <Text style={styles.textRandom}>Mi Mamá: Berenice Alonso.</Text>
          <Text style={styles.textRandom}>Mi Papá: Gastón Fauret.</Text>
          <a style={styles.links} href="https://wa.link/kh6loz">Escribile a mi papá</a>
          <Text style={styles.textRandom}>Mi casa: Tucuman Nro. 314.</Text> 
          <a style={styles.links} href="https://maps.app.goo.gl/EqoRvKZCxvtx44rv6">Ubicacion de mi casa.</a>
          <Text style={styles.biopicText}>Soy muy bueno y amigable. Me llevo muy bien con los niños pero a veces puedo ser un poco bruto. Me gusta jugar. Si me llamas y no respondo es por que soy sordo.</Text>       
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
    width: '95%',
    height: '38%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dataContainer: {
    width: '95%',
    height: '58%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },

  petImage: {    
    width: '50%',
    height: '70%',
    borderRadius: '50%'
  }, 

  biopicText: {
    fontSize: 12,
    width: '85%',
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
  }
});
