import { StyleSheet, View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getPopularProducts } from '@/services/getPopularProducts';


export default function StatisticsPage() {
    const [parentWidth, setParentWidth] = useState(0);
    const [rawData, setRawData] = useState({ names: [], count: [] });


    const fetchPopularProducts = async () => {
        try {
            const products = await getPopularProducts();
            setRawData(products);
        } catch (error) {
            console.error("Ошибка загрузки популярных продуктов: ", error)
        }
    }

    fetchPopularProducts()

    useFocusEffect(
        useCallback(() => {
            fetchPopularProducts();
        }, [])
    );


    const data = {
        labels: rawData.names.slice(0, 5),
        datasets: [
            {
                data: rawData.count.slice(0, 5),
            },
        ],
    };

    return (
        <View style={styles.container}
            onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setParentWidth(width);
            }}>
            <View style={styles.popular}>
                <Text style={styles.title}>Самые популярные продукты</Text>
                <BarChart
                    data={data}
                    width={parentWidth - 32}
                    height={400}
                    yAxisLabel=""
                    yAxisSuffix=" ед." // Или любое значение, подходящее для вашей оси Y
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(60, 140, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        barPercentage: 0.8,
                        style: {
                            borderRadius: 16,
                        },
                        propsForBackgroundLines: {
                            stroke: '#ccc', // Цвет линий сетки
                            strokeWidth: 1,    // Толщина линий сетки
                            strokeDasharray: '12', // Штриховой стиль
                        },
                    }}
                    verticalLabelRotation={0}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 16,
        backgroundColor: '#f5f2f0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    popular: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
    },
});
