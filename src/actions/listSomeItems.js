import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import data from './data.json'

export function list() {
   return data.list.map(({title,desc,likes}) => {
       return <View style={styles.container} key={`${likes}/${title}`}>
           <Text style={styles.title}>{title}</Text>
           <Text styel={styles.desc}>{desc}</Text>
           <Text style={likes}>Likes : {likes}</Text>
        </View>
   })
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});