import { View, Text, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import Svg, { Circle } from 'react-native-svg'
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

let { width: w, height: h } = Dimensions.get('screen')

const Onboarding = (props) => {

    let radius = w / 6
    let strokeWidth = radius * 0.05
    let circle_length = 2 * radius * Math.PI
    let innerCircleWidth = (radius * 2) * 0.8

    const [currentIndex, setCurrentIndex] = useState(1)

    let onboardingData = [
        {
            title: 'Welcome to Tech Haven',
            description: "Explore the world of technology at your fingertips with our mobile app! Whether you're shopping for the latest gadgets or building a custom PC, Tech Haven has you covered.",
            image: require('../assets/onboarding/hardware.png')
        },
        {
            title: 'Shop the Latest Tech',
            description: "Discover a wide range of cutting-edge electronics, from smartphones and tablets to laptops and gaming consoles. Our app offers a seamless shopping experience with reviews, ratings, and expert recommendations.",
            image: require('../assets/onboarding/online-shopping.png')
        },
        {
            title: 'Build Your Dream PC',
            description: "Take control of your PC-building journey with our app. Explore a vast selection of high-quality PC components, compare prices, and create your dream rig with ease. From CPUs to graphics cards, we've got it all.",
            image: require('../assets/onboarding/process.png')
        },
    ]

    let totalDataLength = onboardingData.length

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, }}>
                <Carousel
                    loop
                    autoPlay
                    width={w}
                    onProgressChange={(e) => setCurrentIndex(Math.abs((e / w).toFixed(1)))}
                    data={onboardingData}
                    scrollAnimationDuration={1500}
                    // onSnapToItem={(index) => setCurrentIndex(index + 1)}
                    renderItem={({ item, index }) => (
                        <View style={{ width: w, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <Image source={item.image} style={{ width: '70%', resizeMode: 'contain', height: 200 }} />

                            <View style={{ paddingHorizontal: 10, marginTop: 30 }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={{ flex: 1 }}>

                <Svg>
                    <Circle
                        r={radius}
                        cx={w / 2}
                        cy={(h / 3) / 2}
                        stroke={'#dfc5ce'}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        r={radius}
                        cx={w / 2}
                        cy={(h / 3) / 2}
                        stroke={'#e91e63'}
                        strokeWidth={strokeWidth}
                        rotation={270}
                        origin={`${w / 2}, ${(h / 3) / 2}`}
                        strokeLinecap='round'
                        strokeDasharray={circle_length}
                        strokeDashoffset={circle_length * (1 - currentIndex / totalDataLength)}
                    />
                </Svg>

                <TouchableOpacity
                    onPress={async () => {
                        props.navigation.navigate('Login')
                    }}
                    style={{
                        position: 'absolute',
                        left: (w - innerCircleWidth) / 2,
                        top: ((h / 3) - innerCircleWidth) / 2,
                        borderRadius: 100,
                        width: innerCircleWidth,
                        aspectRatio: 1,
                        backgroundColor: '#e91e63',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image source={require('../assets/onboarding/right-arrow.png')} style={{ tintColor: 'white', width: '50%', resizeMode: 'center', height: '100%', }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Onboarding


const styles = StyleSheet.create({
    title: {
        fontSize: w * .07,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    description: {
        fontSize: w * .03,
        opacity: .5,
        textAlign: 'center',

    }
})