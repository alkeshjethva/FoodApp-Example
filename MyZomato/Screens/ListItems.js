import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { styles } from '../Styles';
import { addChocolate, removeChocolate } from '../Redux/Actions/ChocolateAction'
import { addIcecreams, removeIcecreams } from '../Redux/Actions/IceCreamsAction'

const ListItems = (props) => {

    const data = [
        {
            name: props.chocolateName,
            item: props.chocolateItem,
            add: props.addChocolate,
            remove: props.removeChocolate,
            bhav: 100
        },
        {
            name: props.icecreamName,
            item: props.icecreamItem,
            add: props.addIcecreams,
            remove: props.removeIcecreams,
            bhav: 150
        }

    ]

    return (
        <ScrollView style={{ marginBottom: 82 }} showsVerticalScrollIndicator={false}>

            <View>
                {
                    data.map((items, i) => {
                        return (
                            <View style={styles.listContainer} key={i}>

                                <View style={styles.listInnerView} >
                                    <View style={styles.listTitles}>
                                        <Text style={styles.listItemName}>{items.name}</Text>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={styles.bhav}>₹ {items.bhav}/-</Text>
                                        </View>

                                    </View>

                                    {
                                        items.item > 0 ?
                                            <View style={styles.listBtnContainer}>
                                                <TouchableOpacity style={{ flex: 1.50, justifyContent: 'center', alignItems: 'center', }} onPress={items.remove} >
                                                    <Text style={{ fontSize: 10, color: '#fd5e53', fontFamily: 'Poppins-Medium', }}>x</Text>
                                                </TouchableOpacity>

                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 20, color: '#FFFFFF', fontFamily: 'Poppins-Medium', }}>{items.item}</Text>
                                                </View>

                                                <TouchableOpacity style={{ flex: 1.50, justifyContent: 'center', alignItems: 'center' }} onPress={items.add} >
                                                    <Text style={{ fontSize: 15, color: '#21bf73', fontFamily: 'Poppins-Medium', }}>+</Text>
                                                </TouchableOpacity>
                                            </View>

                                            : <TouchableOpacity style={styles.AddBtn} onPress={items.add} >
                                                <Text style={{ fontSize: 15, color: '#21bf73', fontFamily: 'Poppins-Medium', }}>ADD</Text>
                                            </TouchableOpacity>

                                    }

                                </View>
                            </View>

                        )
                    })
                }
            </View>
        </ScrollView>

    )
}

const mapStateToProps = state => {
    return {
        chocolateName: state.chocolate.name,
        chocolateItem: state.chocolate.item,

        icecreamName: state.icecream.name,
        icecreamItem: state.icecream.item,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addChocolate: () => dispatch(addChocolate()),
        removeChocolate: () => dispatch(removeChocolate()),

        addIcecreams: () => dispatch(addIcecreams()),
        removeIcecreams: () => dispatch(removeIcecreams()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)




