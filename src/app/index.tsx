import { Text, ScrollView, View } from "react-native"
import { Header } from "../components/header"

import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >

      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />

      </View>

      <Section
        name="Comida em alta"
        label="Veja mais"
        action={() => console.log("clicou no veja mais")}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section
        name="Famoso no DevFood"
        label="Veja todas"
        action={() => console.log("clicou no veja mais")}
        size="text-xl"
      />
      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja todas"
        action={() => console.log("clicou no Restaurantes")}
        size="text-xl"
      />

      <RestaurantVerticalList />

    </ScrollView>
  );
}
