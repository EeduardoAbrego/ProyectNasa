const { View, Text, Image, StyleSheet } = require('react-native');

const Header = () => {
    return (
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Explore</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image style={styles.image} source={require("../assets/images/logo-nasa.png")
            } />
          </View>
        </View>
     );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        
        paddingHorizontal: 16,
        flexDirection: "row",
    },
    leftContainer:{
        justifyContent: "center",
        flex: 1,
      alignItems: "flex-start",
    },
    rightContainer:{
        flex:1 ,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    title:{
        color: "white",
        fontSize: 30,
    },
    image: {
        width: 70,
        height: 60,
        alignItems: "center",
    },


})