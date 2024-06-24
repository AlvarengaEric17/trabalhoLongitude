import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
export default function Localizacao() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#2F2F2F",
                    paddingTop: 56,
                    paddingBottom: 100,
                }}>
                <Text
                    style={{
                        color: "#FFFFFF",
                        fontSize: 25,
                        marginBottom: 92,
                        marginLeft: 82,
                    }}>
                    {"Localização exata"}
                </Text>
                <Image
                    source={require('../../assets/mapa.png')} 
                    resizeMode={"stretch"}
                    style={{
                        width: '90%',
                        height: '90%',
                        
                        marginBottom: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 34,
                        marginHorizontal: 43,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 25,
                        }}>
                        {"Lat: 25°"}
                    </Text>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 25,
                        }}>
                        {"Lon: 75°"}
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: "center",
                        backgroundColor: "#971FE1",
                        borderRadius: 10,
                        paddingVertical: 22,
                        marginHorizontal: 39,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 25,
                        }}>
                        {"Abrir mapa"}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}