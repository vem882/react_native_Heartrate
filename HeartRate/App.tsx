import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState<string>('');

  const calculateHeartRateLimits = (): { lower: number; upper: number } => {
    const ageNumber = parseFloat(age);
    
    if (isNaN(ageNumber) || age.trim() === '') {
      return { lower: 0, upper: 0 };
    }

    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;

    return { lower, upper };
  };

  const { lower, upper } = calculateHeartRateLimits();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Heart Rate Limits Calculator</Text>
        
        <Text style={styles.label}>Enter your Age:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
        />

        <View style={styles.resultsContainer}>
          <Text style={styles.resultLabel}>Heart rate limits</Text>
          <Text style={styles.resultText}>
            Lower limit: {lower.toFixed(0)}
          </Text>
          <Text style={styles.resultText}>
            Upper limit: {upper.toFixed(0)}
          </Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  resultsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
