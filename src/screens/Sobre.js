import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre(){

const navigation = useNavigation();

    return(
        <View>
<Text>Página secundaria</Text>
<Button
title="Voltar"
onPress={() => navigation.navigate('Home')}
/>
        </View>
    )
}