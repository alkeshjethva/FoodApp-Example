import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import Header from '../Components/Header'
import { styles } from '../Styles'
import ListItems from './ListItems';
import Footer from '../Components/Footer';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Button title="OK" /> */}

            <Header onPressOpen={() => navigation.openDrawer()} name={'Foods'} />
            <ListItems />
            <Footer />
        </View>
    )
}

export default Home

