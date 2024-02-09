import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { useMemo } from 'react'
import 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation, useTheme } from '@react-navigation/native';
import SafeArea from '../../components/SafeAreaView';

const characters = [
    {
        "id": 1,
        "name": "Iron Man",
        "img": "https://i.pinimg.com/564x/09/61/36/096136e1956e16a900536098c8aa7c28.jpg",
        "description": "Genius billionaire inventor Tony Stark creates a suit of armor to save his own life and becomes the armored superhero known as Iron Man."
    },
    {
        "id": 2,
        "name": "Spider-Man",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4R4vZDr7_bYDV1rHIcsZncUg5aiqocN4QPg&usqp=CAU",
        "description": "High school student Peter Parker gains superpowers after being bitten by a radioactive spider, and he dedicates himself to fighting crime as Spider-Man."
    },
    {
        "id": 3,
        "name": "Captain America",
        "img": "https://lh3.googleusercontent.com/proxy/6sk0s1gInMrM1UsYsu9-0AVSdmpdSPJf33yfi_jiyWSVxVUR48f2jVg-R8Ta4uRT56kbijn4rVvizVR2yUlURb4Zy6EG75HNwL7sB2AWBj9tKchtc6TePBDteNyAhrUsrYFS_j0u5FHAgpkIXA",
        "description": "Steve Rogers, a frail young man enhanced to the peak of human perfection by an experimental serum, becomes the patriotic superhero Captain America."
    },
    {
        "id": 4,
        "name": "Thor",
        "img": "https://w0.peakpx.com/wallpaper/477/401/HD-wallpaper-thor-in-avengers-endgame-thumbnail.jpg",
        "description": "The Norse god of thunder, Thor, wields his mighty hammer Mjolnir and defends the realms of Asgard and Earth from various threats."
    },
    {
        "id": 5,
        "name": "Hulk",
        "img": "https://w0.peakpx.com/wallpaper/959/360/HD-wallpaper-small-angry-hulk.jpg",
        "description": "Scientist Bruce Banner transforms into the monstrous Hulk whenever he experiences anger or stress, becoming a powerful force for both good and destruction."
    },
    {
        "id": 6,
        "name": "Black Widow",
        "img": "https://w0.peakpx.com/wallpaper/669/105/HD-wallpaper-black-widow-avengers-black-widow-capitan-america-scarlett-johansson.jpg",
        "description": "Natasha Romanoff, a former Russian spy and assassin, joins S.H.I.E.L.D. and becomes the skilled and deadly superhero known as Black Widow."
    },
    {
        "id": 7,
        "name": "Doctor Strange",
        "img": "https://wallpapercosmos.com/w/full/e/f/4/328021-2160x3840-mobile-4k-doctor-strange-wallpaper.jpg",
        "description": "Neurosurgeon Dr. Stephen Strange discovers the mystical arts and becomes the Sorcerer Supreme, protecting the Earth from magical threats."
    },
    {
        "id": 8,
        "name": "Black Panther",
        "img": "https://lh3.googleusercontent.com/proxy/lG87ezyGY2zWzrVbGrwDuDO54KCE9BQZBo-XFhpj8PmfjOrZwHNIgbb41uwFEEmtOkeAicgjyGSTNmdu8A0xG3twEATiFlt9XLiS_fRS7VGoT9RtXH39Gh0-3XKS0otPgp4Dk5MAm56KKIM",
        "description": "T'Challa, the king of the technologically advanced African nation of Wakanda, assumes the mantle of the Black Panther to protect his people and the world."
    },
    {
        "id": 9,
        "name": "Captain Marvel",
        "img": "https://www.teahub.io/photos/full/96-965708_captain-marvel-higher-further-faster.jpg",
        "description": "Carol Danvers, an Air Force pilot exposed to alien technology, gains superhuman abilities and becomes the mighty superhero known as Captain Marvel."
    },
    {
        "id": 10,
        "name": "Wolverine",
        "img": "https://w0.peakpx.com/wallpaper/133/676/HD-wallpaper-wolverine-x-men-art.jpg",
        "description": "Logan, a mutant with accelerated healing and adamantium claws, fights alongside the X-Men as the fierce and enigmatic Wolverine."
    }
]

const CardItem = ({ item, style }) => {
    const navigation = useNavigation();
    const randomBool = useMemo(() => Math.random() < 0.5, []);

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailsPage', { character: item })
        }}>
            <View key={item.id} style={[{ marginBottom: 10, flex: 1 }, style]}>
                <SharedElement id={`image` + item.id} >
                    <Image
                        source={{ uri: item.img }}
                        style={{
                            height: randomBool ? 150 : 280,
                            alignSelf: 'stretch',
                            borderRadius: 10
                        }}
                        resizeMode="cover"
                    />
                </SharedElement>

            </View>
        </TouchableOpacity>

    );
};

const renderItem = ({ item, i }) => {

    return (
        <CardItem item={item} style={{ marginLeft: i % 2 === 0 ? 0 : 10 }} />
    );
};


const SharedTransition = () => {
    return (
        <SafeArea >
            <MasonryList
                keyExtractor={(item) => item.id}
                data={characters}
                numColumns={2}
                contentContainerStyle={{
                    paddingTop: 10,
                    paddingHorizontal: 10,
                    alignSelf: 'stretch',
                }}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                onEndReachedThreshold={0.1}
            />
        </SafeArea>
    )
}

export default SharedTransition

const styles = StyleSheet.create({})