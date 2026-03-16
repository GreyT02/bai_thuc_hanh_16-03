import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  // Categories
  const categories = [
    { name: 'PIZZA', icon: require('../assets/iconpizza.jpg') },
    { name: 'BURGER', icon: require('../assets/iconburger.jpg') },
    { name: 'DRINK', icon: require('../assets/icondrink.jpg') },
    { name: 'RICI', icon: require('../assets/iconrice.jpg') },
  ];

  // Popular Items
  const popularItems = [
    { name: 'BURGER', image: require('../assets/burger.jpg') },
    { name: 'PIZZA', image: require('../assets/pizza.jpg') },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.locationLabel}>Your Location</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#4B39EF" />
            <Text style={styles.locationText}>Savar, Dhaka</Text>
          </View>
        </View>
        <View style={styles.bellBtn}>
          <Ionicons name="notifications-outline" size={20} color="#222" />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#d9d5ff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#d9d5ff"
        />
        <Feather name="sliders" size={18} color="#fff" />
      </View>

      {/* Categories */}
      <View style={styles.categoryRow}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryCard, index === 0 && styles.categoryCardActive]}
          >
            <Image source={item.icon} style={styles.categoryIcon} resizeMode="contain" />
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.categoryTextActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Banner Card */}
      <View style={styles.saleCard}>
        <Image source={require('../assets/burger.jpg')} style={styles.saleImage} />
        <Image source={require('../assets/saleburger.jpg')} style={styles.badge} />
        <View style={styles.bannerText}>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSub}>Today's Hot offer</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.popularRow}>
        {popularItems.map((item, index) => (
          <View key={index} style={styles.foodCard}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F3F3', paddingHorizontal: 8, paddingTop: 8 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F6DE',
    borderRadius: 28,
    padding: 16,
    marginBottom: 16,
    marginTop: 20,
  },

container: {
  flex: 1,
  backgroundColor: '#F3F3F3',
  paddingHorizontal: 8,
  paddingTop: 60,
},

  avatar: { width: 42, height: 42, borderRadius: 21 },

  locationLabel: { fontSize: 13, color: '#8B8B8B', marginBottom: 4 },

  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { marginLeft: 4, fontSize: 16, fontWeight: '700', color: '#222' },

  bellBtn: {
    marginLeft: 'auto',
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#DDD9B8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4B39EF',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#4B39EF',
    borderRadius: 28,
    height: 50,
    paddingHorizontal: 18,
    marginBottom: 20,
  },
  searchInput: { flex: 1, color: '#fff', marginHorizontal: 10, fontSize: 15 },

  categoryRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12, marginBottom: 20 },
  categoryCard: {
    width: 78,
    height: 94,
    backgroundColor: '#ECECEC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryCard: {
  width: 78,
  height: 94,
  backgroundColor: '#ECECEC',
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
categoryIcon: {
  width: 42,
  height: 42,
  marginBottom: 8,
},
categoryText: {
  fontSize: 12,
  fontWeight: '700',
  color: '#222',
},
  categoryCardActive: { backgroundColor: '#2ED39A' },

  categoryIcon: { width: 34, height: 34, marginBottom: 6 },
  categoryText: { fontSize: 12, fontWeight: '700', color: '#222' },
  categoryTextActive: { color: '#fff' },

  saleCard: { marginHorizontal: 12, borderRadius: 18, overflow: 'hidden', marginBottom: 20 },
  saleImage: { width: '100%', height: 140 },
  badge: { position: 'absolute', top: 10, right: 10, width: 50, height: 50 },
  bannerText: { position: 'absolute', top: 16, left: 16 },
  bannerTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  bannerSub: { color: '#fff', fontSize: 12, marginTop: 4 },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 12, marginBottom: 12 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#222' },
  viewAll: { fontSize: 14, fontWeight: '600', color: '#555' },

  popularRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 12 },
  foodCard: { width: '48%' },
  foodImage: { width: '100%', height: 96, borderRadius: 8 },
  foodName: { fontSize: 15, fontWeight: '700', marginTop: 8, color: '#222' },
});