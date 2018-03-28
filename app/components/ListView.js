import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import abc from '../../data/Data.js';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

export default class ListView extends Component {
    render() {
        return (
            <List>
                {
                    list.map((l, i) => (
                        <ListItem
                          roundAvatar
                          avatar={{uri:l.avatar_url}}
                          key={i}
                          title={l.name}
                        />))
                }
            </List>
        )
    }
}
