import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import AppCard from '../components/AppCard'
import defaultStyles from '../config/styles'

import routes from '../navigation/routes'
import listingsApi from '../api/listings'

function ListingScreen({ navigation }) {
    const [listings, setListings] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async () => {
        const response = await listingsApi.getListings()
        if (!response.ok) return setError(true)
        setError(false)
        setListings(response.data)
    }

    return (
        <Screen style={styles.container}>
            {error && (
                <>
                    <AppText>Could not retreive data from the server</AppText>
                    <AppButton title="Try again" onPress={loadListings()} />
                </>
            )}
            <FlatList
                style={styles.list}
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        description={'$' + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
    },
    list: {
        padding: 20,
    },
})

export default ListingScreen
