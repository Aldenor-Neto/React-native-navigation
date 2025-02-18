import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";

export default function Home() {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Página inicial</Text>
            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Sobre', {
                    nome: 'Aldenor Neto',
                    dataNascimento: '30/12/1987',
                    cidade: 'Pacatuba'
                })}
            />
        </View>
    );
}
