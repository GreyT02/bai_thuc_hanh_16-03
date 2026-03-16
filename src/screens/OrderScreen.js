import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function OrderScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      <View style={styles.itemCard}>
        <Image
          source={{ uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300' }}
          style={styles.itemImage}
        />
        <Text style={styles.itemName}>BURGER</Text>
        <Text style={styles.itemPrice}>$28</Text>
        <Text style={styles.itemRating}>⭐ 4.9 (3k+ Rating)</Text>
      </View>

      <View style={styles.checkout}>
        <Text style={styles.checkoutText}>Subtotal (2) $56</Text>
        <Text style={styles.checkoutText}>Delivery Fee $6.20</Text>
        <Text style={styles.checkoutText}>Payable Total $62.2</Text>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16, marginTop: 60,backgroundColor:'#fff' },
  title:{ fontSize:22, fontWeight:'700', marginBottom:16 },
  itemCard:{ backgroundColor:'#f7f7f7', padding:16, borderRadius:12, marginBottom:16 },
  itemImage:{ width:'100%', height:180, borderRadius:12, marginBottom:12 },
  itemName:{ fontSize:18, fontWeight:'700' },
  itemPrice:{ fontSize:16, fontWeight:'600', marginVertical:4 },
  itemRating:{ fontSize:14, color:'#999' },
  checkout:{ padding:16, backgroundColor:'#eaeaea', borderRadius:12 },
  checkoutText:{ fontSize:16, marginBottom:4 },
  confirmBtn:{ backgroundColor:'#4B39EF', padding:12, borderRadius:10, marginTop:12 },
  confirmText:{ color:'#fff', fontWeight:'700', textAlign:'center' },
});