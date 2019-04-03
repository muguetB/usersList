// @flow

import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

type Props = {
 //   isVisited: boolean,
  //  checkIfVisitedAction: Function
};

const State = {};

class Welcome extends PureComponent<Props, State> {

    componentDidMount(): void {
      //  if (this.props.isVisited) {
        //    this.props.navigation.navigate('Main');
       // }
      //  this.props.checkIfVisitedAction();
    }

    render() {
        return (
            <View>
                <Text>Welcome Page!</Text>
            </View>
        );
    }
}
export default Welcome;
