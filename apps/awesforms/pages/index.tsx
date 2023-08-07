import React from 'react';
import Flex from '@org/ui/components/Layout/Flex';
import View from '@org/ui/components/Layout/View';

const Home = () => {
  return (
    <Flex
      name="ParentHomeComponent"
      justifyContent="center"
      display="flex"
      alignItems="center"
    >
      <View>
        <Flex name="list" flexDirection="row">
          <View>
            <View>AB</View>
            <View>BC</View>
          </View>
        </Flex>
        <Flex name="other list" flexDirection="row">
          <View>
            <View>ASD</View>
            <View>asd</View>
            <View>qwe</View>
          </View>
        </Flex>
      </View>
    </Flex>
  );
};

export default Home;
