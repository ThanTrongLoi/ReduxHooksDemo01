import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import { DimensionApp } from '../../unitDimension/dimensionapp'
import Icon from 'react-native-vector-icons/Ionicons'


const SigninScreen = () => {
    const [showpass, setShowpass] = useState(false)
    const [visible, setVisible] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logowatch.png')}
            />
            <View style={styles.box_input}>
                <View style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail/Số điện thoại'
                        placeholderTextColor='#000'
                        underlineColorAndroid={false}
                    />
                    <Icon
                        style={styles.icon_form}
                        name={'mail-outline'}
                        size={26}
                    />
                </View>
                <View style={styles.input_form} >
                    <TextInput
                        style={styles.input}
                        placeholder='Mật khẩu'
                        placeholderTextColor='#000'
                        secureTextEntry={visible}
                        underlineColorAndroid={false}
                    />
                    <Icon
                        style={styles.icon_form}
                        name={'lock-closed-outline'}
                        size={26}
                    />
                    <TouchableOpacity
                        style={styles.icon_eye}
                        onPress={() => {
                            setShowpass(!showpass),
                                setVisible(!visible)
                        }}
                    >
                        <Icon
                            name={showpass ? 'eye-outline' : 'eye-off-outline'}
                            size={26}
                            color='#000'
                        />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.text_login}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.box_text}>
                    <Text style={styles.text_btn}>Khi đăng nhập là bạn đã chấp nhận </Text>
                    <TouchableOpacity
                    >
                        <Text style={{
                            ...styles.text_btn,
                            textDecorationLine: 'underline',
                            color: 'blue'
                        }}>
                            điều khoản sử dụng</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{
                        ...styles.text_btn,
                        color: 'blue',
                        marginVertical: 10
                    }}>
                        Quên mật khẩu?
                        </Text>
                </TouchableOpacity>
                <Text style={{
                    ...styles.text_btn,
                    marginVertical: 20
                }}>Hoặc đăng nhập với</Text>
                <View style={{ justifyContent: 'space-between', marginVertical: 10 }}>

                    <View style={styles.box_social}>
                        <TouchableOpacity
                            style={styles.btn_social}
                        >
                            <Icon
                                name={'logo-google'}
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn_social}
                        >
                            <Icon
                                name={'logo-facebook'}
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SigninScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //============== Input-Form ======================
    box_input: {
        flex: 1,
        justifyContent: 'space-between'
    },
    input: {
        width: DimensionApp.getWIDTH() - 40,
        height: 45,
        paddingLeft: 45,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8
    },
    input_form: {
        marginVertical: 10
    },
    icon_form: {
        position: 'absolute',
        left: 12,
        top: 8
    },
    icon_eye: {
        position: 'absolute',
        right: 12,
        top: 8
    },
    //============= Button ====================
    box_social: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn_social: {
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: DimensionApp.getWIDTH() - 40,
        height: 45,
        backgroundColor: '#c79a00',
        borderRadius: 5
    },
    text_login: {
        fontSize: 20,
        fontWeight: '700',
        // color: '#255d00'
        color: '#fff'
    },
    //=========== Text ============
    box_text: {
        flexDirection: 'row',
        marginVertical: 10
    },
    text_btn: {
        fontSize: 14,
        fontWeight: '400'
    },
    //========== Logo ========
    logo: {
        width: DimensionApp.getWIDTH() - 150,
        height: DimensionApp.getWIDTH() - 150,
        marginTop: 10,
    }
})