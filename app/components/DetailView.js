import Markdown from 'react-native-simple-markdown';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DetailsView extends Component {
    render() {
        return (
            <View>
                <Text h2>{this.props.blog.title}</Text>
                <Text h3>{this.props.blog.published_at}</Text>
                <Markdown>{this.props.blog.markdown}</Markdown>
            </View>
        )
    }
}
