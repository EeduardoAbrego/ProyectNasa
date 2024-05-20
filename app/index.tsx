import { StyleSheet, Text, View , SafeAreaView, StatusBar } from "react-native";
import Home from "@/Views/Home";



export default function Page() {

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar  backgroundColor={"#0000ff"} />
        <Home/>
   </SafeAreaView>
  );

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor:"#0202fa" ,
  } 
}); 

