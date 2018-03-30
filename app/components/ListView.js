import React, { Component } from 'react';
import { List, ListItem, SearchBar } from 'react-native-elements';

import OfflineData from '../services/Data';
import GetBlogsService from '../services/GetBlogs';

export default class ListView extends Component {
    state = {
        blogs: [],
        searchKey: ''
    }

    onPress(item) {
        const { navigate } = this.props.navigation;
        navigate('BlogDetails', { blog: item })
    }

    getBlogData() {
        if (this.state.searchKey) {
            return this.state.blogs.filter(blog => blog.title.includes(this.state.searchKey))
        } else {
            return this.state.blogs
        }
    }
    getBlogs() {
        GetBlogsService.getBlogs()
            .then(res => {
                this.setState({
                    blogs: res
                })
            })
            .then(res => {
                this.setState({
                    blogs:OfflineData
                })
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                this.setState({
                    blogs:OfflineData
                })
            });
    }

    componentWillMount() {
        this.getBlogs();
    }

    searchBlogs(text) {
        this.setState(
            {
                searchKey: text

            }
        )
    }

    render() {
        return (
            <List
                containerStyle={{
                    flex: 2,
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                }}
            >
                <SearchBar
                    lightTheme
                    round
                    onChangeText={search => this.searchBlogs(search)}
                    onClearText={search => this.getBlogs()}
                    placeholder='Search'
                    icon={{ type: 'font-awesome', name: 'search' }}
                    containerStyle={{
                        marginTop: 0,
                        marginBottom: 16,
                        backgroundColor: 'transparent'
                    }}
                />
                {
                    this.getBlogData().map((l, i) => (
                        <ListItem
                            containerStyle={{
                                borderBottomWidth: 0,
                                marginTop: 0,
                                marginBottom: 16,
                                marginLeft: 8,
                                marginRight: 8,
                                backgroundColor: 'white'
                            }}
                            key={i}
                            title={l.title}
                            onPress={() => { this.onPress(l) }}
                        />))
                }
            </List>
        )
    }
}
