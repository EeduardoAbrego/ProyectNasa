import {  Image, StyleSheet, Text , View} from 'react-native'



 const Card = ({imageToday}) => {

const {date , title , explanation , url} = imageToday;

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: url}}/>
            <View style={styles.container1} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
               
            </View>
        </View>
    );
};

export default Card ;


const styles = StyleSheet.create({
    container:{
        flex:0.5 ,
      backgroundColor:"#2253f5",
      marginHorizontal: 20,
      borderRadius:30,
      marginVertical: 20 ,
    },
    img:{
       width:"90%",
       height: "60%",
       borderRadius: 30,
       alignSelf: "center",
       margin: 20,
       borderColor: "white",
      borderWidth: 2,

    }, 
    container1:{
        flex:0.8 ,
        backgroundColor:"#1ee66b",
        
        
    },
    title:{
      
      
    },
    date:{

    },
    link:{

    },
})