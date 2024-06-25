import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Sobre() {

    const navigation = useNavigation();
    const route = useRoute();

    const nome = route.params.nome;
    const dataNascimento = route.params.dataNascimento;
    const cidade = route.params.cidade;

    return (
        <View>
            <Text>Página Sobre</Text>
            <Text>Dados</Text>

            <Text>Nome: {nome}</Text>
            <Text>Data de nascimento: {dataNascimento}</Text>
            <Text>Cidade: {cidade}</Text>

            <Button
                title="Voltar"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}