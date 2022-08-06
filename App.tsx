/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState, type PropsWithChildren } from 'react';
 import {
   FlatList,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Card from './src/components/Card'
 
 const cardCharactors = [
   { "char": "A", matched: false },
   { "char": "B", matched: false },
   { "char": "C", matched: false },
   { "char": "D", matched: false },
   { "char": "E", matched: false },
   { "char": "F", matched: false },
   { "char": "G", matched: false },
   { "char": "H", matched: false },
 
 ]
 
 
 const App = () => {
   const [choiceOne, setChoiceOne] = useState<any>(null);
   const [choiceTwo, setChoiceTwo] = useState<any>(null);
   const [turns, setTurns] = useState(0);
   const [cards, setCards] = useState<Array<any>>([])
 
   useEffect(() => {
 
     if (choiceOne && choiceTwo) {
       if (choiceOne.char === choiceTwo.char) {
         setCards((prevState) => prevState.map(card => {
           if (card.char === choiceOne.char) {
             return { ...card, matched: true }
 
           } else {
             return card
           }
         }))
         resetTurn()
       } else {
         resetTurn()
 
       }
     }
 
   }, [choiceOne, choiceTwo])
 
   const handleChoice = (card: any) => {
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
 
   }
 
   const cardShuffle = () => {
 
     const shuffleCards = [...cardCharactors, ...cardCharactors]
       .sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
 
 
     setCards(shuffleCards);
     setTurns(0)
   }
 
 
 
   const resetTurn = () => {
     setChoiceOne(null)
     setChoiceTwo(null);
     setTurns(prevState => prevState + 1)
   }
 
 
 console.log(cards,"local")
   return (
     <View style={styles.container}>
       <View style={{ paddingVertical: 10 }}>
         <Text onPress={cardShuffle} style={{fontSize: 18,fontWeight: 'bold'}}>Start Game</Text>
       </View>
 
         <FlatList
           data={cards}
           numColumns={4}
           renderItem={({ item, index }: { item: any, index: any }) => {
             return <Card  card={item} handleClick={handleChoice} flipped={choiceOne === cards || choiceTwo === cards || item.matched} />
           }}
         />
 
 
 
     </View>
 
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10
   },
   cards: {
 
   },
 });
 
 export default App;
 