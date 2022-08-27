import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { initializeFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox, TextInput } from 'react-native';

import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export default function App() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>

            <User user={user} />

        </UserContext.Provider>
    );
}

function User() {
    const user = useContext(UserContext);
    const [text, onChangeText] = useState("PH");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{user}</Text>

            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />

            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontWeight: "700",
        fontSize: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        width: 200,
    },
});
