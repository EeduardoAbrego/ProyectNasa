import { View, Text, StyleSheet} from "react-native"
import Header from "@/components/Header";
import Card from "@/components/Card"
import fetchApi from "@/utils/fetch"
import { useEffect, useState } from "react";
  
  
  
 const Home = () => {
    const [imageToday, setImageToday] = useState({});

    useEffect(()=>{
     
        const lodayDay = async () => {
            try {
                const data =  await fetchApi();
                setImageToday(data)
            } catch (error) {
                console.error(error)
                setImageToday({})
            }
        };

        lodayDay();


    },[])

    return (
       <View style={styles.container} >
        <View style={{alignItems:"center"}}>
            <Text style={styles.title}> Home </Text>
        </View>
        
         <Header/>
         <Card imageToday={imageToday}  />
       </View>
    );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1 ,
       

    },
    title:{
         textAlign:"center",
         width: "33%",
         fontSize: 23 ,
         fontWeight: "bold",
         color: "white",
    }
 })

 export default Home;

