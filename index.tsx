import React from "react";
//import { render } from "react-dom";

import { createRoot } from "react-dom/client";
import { StyleSheet, View, Text } from "react-native";
import Counter from "@jakemott/reactshared"



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    }
});

const App = () => {

  return (
   <View style={styles.container}>
     <Counter />
   </View> 
  );


};



//const App = () => {
//
//  return (
//   <View>
//     <Text>This is rendered using react native web</Text>
//   </View> 
//  );
//
//
//};


//const App = () => {
//
//  return (
//   <div>
//       <p>Hello World!</p>
//   </div>
//
//
//  );
//
//
//};

//const root = createRoot(document.getElementById("root") as HTMLDivElement);

//const container = document.getElementById("root");

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);


//const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//root.render(<App />);
//render(<App />, document.getElementById("root"));