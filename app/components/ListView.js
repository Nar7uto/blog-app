import React, { Component } from 'react';
import { List, ListItem, SearchBar } from 'react-native-elements';

import OfflineData from '../../data/Data.js';
import getAllBlogs from '../services/Api';


export default class ListView extends Component {
    state = {
        blogs: OfflineData
    }
    getBlogs() {
        getAllBlogs
            .then(res => {
                console.log(res);
                //Not working
                this.setState({
                    blogs: OfflineData
                })
            })
            .then(res => {
                this.setState({
                    blogs: OfflineData
                })
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
                });
    }
    componentWillMount() {
        this.getBlogs();
    }
    searchBlogs(text) {
        this.setState(
            {
                // Not working
                blogs: this.state.blogs.find(blog => blog.title == text)
            }
        )
    }
    render() {
        return (
            <List>
            <SearchBar
                onChangeText={search => this.searchBlogs(search)}
                onClearText={search => this.getBlogs()}
                placeholder='Type Here...' />
                {
                    this.state.blogs.map((l, i) => (
                        <ListItem
                            containerStyle={{
                                borderBottomWidth: 0,
                                marginTop: 10,
                                marginBottom: 2,
                                marginLeft: 8,
                                marginRight: 8,
                                backgroundColor: 'white'
                            }}
                            key={i}
                            title={l.title}
                        />))
                }
            </List>
        )
    }
}
