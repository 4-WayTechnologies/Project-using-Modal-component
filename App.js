import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Modal_text}>create Modal</Text>
        <Image
          source={{
            uri: 'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
          }}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.create_btn}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.btn_text}>Open Modal</Text>
        </TouchableOpacity>
      </View>
      {modalVisible == true ? (
        <View style={styles.FullBack_width}></View>
      ) : null}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.Modal_box}>
          <Text style={{color: '#000000', fontSize: 16, marginTop: 10}}>
            Hello World!
          </Text>

          <TouchableOpacity
            style={styles.modal_btn}
            onPress={() => setModalVisible(false)}>
            <Text style={{color: '#ffffff'}}>Button</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Modal_text: {
    fontSize: 20,
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 500,
    marginTop: 20,
  },
  create_btn: {
    width: 340,
    height: 50,
    backgroundColor: '#CD5808',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  btn_text: {
    color: '#ffffff',
    fontSize: 20,
  },
  FullBack_width: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    elevation: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    flex: 1,
  },

  Modal_box: {
    width: Dimensions.get('screen').width - 65,
    height: 122,
    backgroundColor: '#FFFFFF',
    marginVertical: 280,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  modal_btn: {
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CD5808',
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
