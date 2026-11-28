import { Text, View, StyleSheet } from "react-native";

export default function Card() {

    const track = document.querySelector('.carousel-track');
  //const slides = document.querySelectorAll('.slide');
  //const prevBtn = document.querySelector('.prev');
  //const nextBtn = document.querySelector('.next');

  //let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  return (
    <View style={styles.container}>
      <Text>Coucou</Text>
      



      <View>
        
      </View>
    </View>

)}