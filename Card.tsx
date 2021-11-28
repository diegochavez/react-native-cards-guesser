import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export enum CardType {
  c = "♣",
  h = "♥",
  s = "♠",
  d = "♦",
}

export function getCardLabel(card: number) {
  switch (card) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 14:
      return "A";
    default:
      return card.toString();
  }
}

export function getValueByKeyCard(value: string) {
  return Object.entries(CardType).find(([key, val]) => key === value)?.[1];
  // Element implicitly has an 'any' type because index expression is not of type 'number'.ts(7015)
}

export function Card({ card }) {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 25 }}>{getCardLabel(card[0])}</Text>
      <Text
        style={
          card[1] === "h" || card[1] === "d"
            ? [styles.red, styles.cardText]
            : [styles.cardText]
        }
      >
        {getValueByKeyCard(card[1])}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  pickerContainer: {
    flexDirection: "row",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 100,
  },
  red: {
    color: "red",
  },
  cardText: {
    fontSize: 20,
  },
  card: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 100,
    marginVertical: 10,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
