import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import CardGuess from "./CardGuess";
import { Card, CardType } from "./Card";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome</Text>
      <Button
        title="Enter Cards"
        onPress={() => navigation.navigate("Cards")}
      />
    </View>
  );
}

function CardsScreen({ navigation }: any) {
  const [selectedCards, setCard] = useState([]);

  const [selectedCardNumber, setCardNumber] = useState("2");
  const [selectedCardType, setCardType] = useState("c");
  const [guessedCard, setGuessedCard] = useState([]);
  const guessMyCard = () => setGuessedCard(CardGuess(selectedCards));
  const clear = () => {
    setCard([]);
    setGuessedCard([]);
  };
  const handleRemoveItem = (cardToRemove) => {
    setCard(selectedCards.filter((card) => cardToRemove !== card));
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {selectedCards.map((card: any, idx) => (
          <View key={idx} style={{ width: "20%", flexWrap: "nowrap" }}>
            <Card card={card} />
            <Button
              color="grey"
              title="X"
              onPress={() => handleRemoveItem(card)}
            />
          </View>
        ))}
      </View>
      {guessedCard.length > 0 ? <Card card={guessedCard} /> : null}
      <View style={styles.pickerContainer}>
        <Picker
          style={{ width: "50%" }}
          selectedValue={selectedCardNumber}
          onValueChange={(itemValue, itemIndex) => setCardNumber(itemValue)}
          accessibilityLabel="Basic Picker Accessibility Label"
        >
          <Picker.Item color="white" label="2" value={2} />
          <Picker.Item color="white" label="3" value={3} />
          <Picker.Item color="white" label="4" value={4} />
          <Picker.Item color="white" label="5" value={5} />
          <Picker.Item color="white" label="6" value={6} />
          <Picker.Item color="white" label="7" value={7} />
          <Picker.Item color="white" label="8" value={8} />
          <Picker.Item color="white" label="9" value={9} />
          <Picker.Item color="white" label="10" value={10} />
          <Picker.Item color="white" label="J" value={11} />
          <Picker.Item color="white" label="Q" value={12} />
          <Picker.Item color="white" label="K" value={13} />
          <Picker.Item color="white" label="A" value={14} />
        </Picker>
        <Picker
          style={{ width: "50%" }}
          selectedValue={selectedCardType}
          onValueChange={(itemValue, itemIndex) => setCardType(itemValue)}
          accessibilityLabel="Basic Picker Accessibility Label"
        >
          <Picker.Item label={CardType.c} value="c" color="white" />
          <Picker.Item label={CardType.h} value="h" color="red" />
          <Picker.Item label={CardType.s} value="s" color="white" />
          <Picker.Item label={CardType.d} value="d" color="red" />
        </Picker>
      </View>
      <Button
        title="Set Card"
        disabled={selectedCards.length === 4}
        onPress={() =>
          setCard((x) => [...x, [selectedCardNumber, selectedCardType]])
        }
      />
      <Button title="Clear" onPress={() => clear()} />
      <Button
        disabled={3 >= selectedCards.length}
        title="Card Guess"
        onPress={() => guessMyCard()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cards">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cards"
          component={CardsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingTop: 40,
  },
  pickerContainer: {
    flexDirection: "row",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 210,
  },
  red: {
    color: "red",
  },
  cardText: {
    fontSize: 20,
  },
});
