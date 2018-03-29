import Markdown from 'react-native-simple-markdown';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import OfflineData from '../../data/Data.js';

export default class DetailsView extends Component {

    state = {
        blog: OfflineData[0]
    }

    render() {
        return (
            <View>
                <Text h2>{this.state.blog.title}</Text>
                <Text h3>{this.state.blog.published_at}</Text>
                <Markdown>{this.state.blog.markdown}</Markdown>
            </View>
        )
    }
}
