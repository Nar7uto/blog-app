import Markdown from 'react-native-simple-markdown';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import GetBlogService from '../services/GetBlogs';
import OfflineData from '../services/Data';

export default class AboutMeView extends Component {

    state = {
        blog: {
            title: "About Me",
            markdown: ""
        }
    }

    componentDidMount() {
        GetBlogService.getBlogs()
            .then(res => {
                this.setState({
                    blog: res.find(x => x.id == 23)
                })
            })
            .then(res=>{
                this.setState({
                    blog: OfflineData.find(x => x.id == 23)
                })
            })
    }

    render() {
        return (
            <View>
                <Text h2>{this.state.blog.title}</Text>
                <Markdown>{this.state.blog.markdown}</Markdown>
            </View>
        )
    }
}
