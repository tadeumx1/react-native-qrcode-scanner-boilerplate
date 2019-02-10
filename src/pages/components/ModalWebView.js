import React from "react";
import { View, WebView, Text, Dimensions, TouchableOpacity, Modal } from "react-native";
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get("window");

const ModalWebView = props => (
  <Modal animationType="slide" transparent={false} visible={props.modalVisible}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: width - 50, height: height - 70 }}>
        <WebView
          automaticallyAdjustContentInsets={false}
          source={{ uri: props.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          style={{ flex: 1 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          height: 30,
          paddingTop: 10,
          width: width - 50,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <TouchableOpacity onPress={props.openLink}>
          <Text>Abrir no navegador</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.handleButton}>
          <Text>Ler outro QRCode</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

ModalWebView.propTypes = {

  modalVisible: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  openLink: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,

}

export default ModalWebView;
