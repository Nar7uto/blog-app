import React, {Component} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListView from './components/ListView';
import DetailView from './components/DetailView';
import AboutMeView from './components/AboutMeView';

const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            const {navigation: {state: {params}}} = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}

const BlogStack = StackNavigator({
    BlogsList: {
        screen: ListView,
        navigationOptions: {
            title: 'Blogs',
        },
    },

    BlogDetails: {
        screen: mapNavigationStateParamsToProps(DetailView),
        navigationOptions: {
            title: 'Blog Details',
        },
    },
});

const AboutMeStack = StackNavigator({
    AboutMe: {
        screen: AboutMeView,
        navigationOptions: {
            title: 'About Me',
        },
    }
});

const BaseNavigator = TabNavigator({
    Blog: {
        screen: BlogStack,
        navigationOptions: {
            tabBarLabel: 'Blogs',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="toc" size={35} color={tintColor} />,
        },
    },

    AboutMe: {
        screen: AboutMeStack,
        navigationOptions: {
            tabBarLabel: 'About Me',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="face" size={35} color={tintColor} />,
        },
    },
});

export default BaseNavigator;