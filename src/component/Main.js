import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

const Main = () => {
  const items = [
    {
      id: 1,
      text: "Hiển thị từ vựng trên màn hình khoá",
      image: require("/assets/lock.png"),
      handle: () => {
        // Xử lý khi bấm vào mục này
        console.log("Bấm vào mục 1");
      },
    },
    {
      id: 2,
      text: "Từ đã tra",
      image: require("/assets/history.png"),
      handle: () => {
        // Xử lý khi bấm vào mục này
        console.log("Bấm vào mục 2");
      },
    },
    {
      id: 3,
      text: "Từ của bạn",
      image: require("/assets/star.png"),
    },
    {
      id: 4,
      text: "Tài khoản",
      image: require("/assets/user.png"),
    },
    {
      id: 5,
      text: "Từ điển Anh Việt",
      image: require("/assets/file.png"),
    },
    {
      id: 5,
      text: "Từ điển Anh Việt",
      image: require("/assets/file.png"),
    },
    {
      id: 6,
      text: "Cửa sổ Tra nhanh",
      image: require("/assets/image_search.png"),
    },
    {
      id: 7,
      text: "Từ vựng VIP luyện thi",
      image: require("/assets/bag.png"),
    },
    {
      id: 8,
      text: "Từ vựng VIP SGK",
      image: require("/assets/bag.png"),
    },
    {
      id: 9,
      text: "Từ vựng VIP SGK mới",
      image: require("/assets/bag.png"),
    },
    {
      id: 10,
      text: "Dịch văn bản",
      image: require("/assets/contact.png"),
    },
    {
      id: 11,
      text: "Gói từ vựng miễn phí",
      image: require("/assets/bars.png"),
    },
    {
      id: 12,
      text: "Các ứng dụng học Tiếng Anh khác",
      image: require("/assets/6.png"),
    },
    {
      id: 13,
      text: "Cài đặt",
      image: require("/assets/settings.png"),
    },
  ];

  // Xử lý dữ liệu để tạo hàng riêng biệt cho các mục có id 2 và 3
  const processedItems = [];
  let currentRow = [];
  items.forEach((item) => {
    if (item.id === 4 || item.id === 3) {
      currentRow.push(item);
    } else {
      if (currentRow.length > 0) {
        processedItems.push(currentRow);
      } else {
        processedItems.push([item]);
      }
      currentRow = [];
    }
  });

  // Đảm bảo rằng dòng cuối cùng cũng được thêm vào processedItems nếu cần.
  if (currentRow.length > 0) {
    processedItems.push(currentRow);
  }

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {item.map((subItem, index) => (
        <TouchableOpacity
          key={subItem.id}
          style={[
            styles.item,
            subItem.id === 4 || subItem.id === 3 ? styles.shortRow : null,
            subItem.id === 11 ? styles.package : null,
          ]}
          onPress={subItem.handle}
        >
          <Image style={{ width: 30, height: 30 }} source={subItem.image} />
          <Text
            style={[
              styles.itemText,
              subItem.id === 11 ? styles.packageText : null,
            ]}
          >
            {subItem.text}
          </Text>{" "}
          {/* {subItem.id === 11 ? (
            <View style={styles.additionalTextContainer}>
              <Text style={styles.additionalText}></Text>
              <Text style={[styles.additionalText, { marginLeft:-20 }]}>
                <Text style={{fontWeight:'bold'}}>Động từ bất quy tắc</Text>
                {"\n"}Hoàn thành 0 %
              </Text>{" "}
              <Text style={styles.additionalText}>
                <Text style={{fontWeight:'bold'}}>Từ Vựng TOEIC</Text>
                {"\n"}Hoàn thành 0 %
              </Text>{" "}  <Text style={styles.additionalText}>
                <Text style={{fontWeight:'bold'}}>Từ Vựng IELTS</Text>
                {"\n"}Hoàn thành 0 %
              </Text>{" "}  <Text style={styles.additionalText}>
                <Text style={{fontWeight:'bold'}}>Từ Vựng TOEFL</Text>
                {"\n"}Hoàn thành 0 %
              </Text>{" "}
              <Text style={styles.additionalText}>
                <Text style={{fontWeight:'bold'}}>300 Từ vựng Oxford</Text>
                {"\n"}Hoàn thành 0 %
              </Text>{" "}            </View>
          ) : null} */}
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text
          style={{
            color: "white",
            marginLeft: "-80%",
            marginTop: "4%",
            fontSize: "18px",
            fontFamily: "Roboto",
          }}
        >
          TFlat
        </Text>
        <Image
          style={{ width: 30, height: 30, marginLeft: "80%", marginTop: "-7%" }}
          source={require("/assets/mdi_cart.png")}
        />
        <TextInput
          style={styles.search}
          placeholder="Tra từ điển Anh Việt - Việt Anh"
        ></TextInput>
        <Icon
          name="search"
          size={20}
          color="#9ca0a6"
          style={{ marginLeft: "-80%", marginTop: "-8%" }}
        ></Icon>
        <Icon
          name="microphone"
          size={25}
          color="black"
          style={{ marginLeft: "75%", marginTop: "-6%" }}
        ></Icon>
        <Pressable
          style={{ marginLeft: "-50%", marginTop: "6%" }}
          onPress={() => alert("q")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="book-search-outline"
              size={24}
              color="white"
            />
          </View>
          <Text
            style={{ color: "white", fontSize: "14px", marginLeft: "-30%" }}
          >
            Dịch màn hình
          </Text>
        </Pressable>
        <Pressable
          style={{ marginLeft: "10%", marginTop: "-15.1%" }}
          onPress={() => alert("q")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="camera" size={24} color="white" />
          </View>
          <Text
            style={{ color: "white", fontSize: "14px", marginLeft: "-30%" }}
          >
            Dịch máy ảnh
          </Text>
        </Pressable>
        <Pressable
          style={{ marginLeft: "70%", marginTop: "-15.1%" }}
          onPress={() => alert("q")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="images-outline" size={24} color="white" />
          </View>
          <Text
            style={{ color: "white", fontSize: "14px", marginLeft: "-30%" }}
          >
            Dịch hình ảnh
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={processedItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => `row_${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  container: {
    backgroundColor: "#0052B4",
    alignItems: "center",
    minHeight: 190,
    top: 0,
  },
  search: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    height: 40,
    borderRadius: 50,
    width: "90%",
    paddingHorizontal: 40,
    fontFamily: "Roboto",
    color: "#9ca0a6",
    fontSize: 17,
    fontWeight: "bold",
    top: 0,
    zIndex: 1 /* Để phần search hiển thị trên các phần khác */,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    minHeight: 40,
    marginHorizontal: 10,
  },
  item: {
    width: 350,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  itemText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "black",
    marginHorizontal: 10,
    fontWeight: 400,
  },
  shortRow: {
    width: 150,
  },

 
});

export default Main;
