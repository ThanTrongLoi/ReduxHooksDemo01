import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { DimensionApp } from '../../unitDimension/dimensionapp'
import Icon from 'react-native-vector-icons/Ionicons'
import { } from 'react-native-gesture-handler'

const SignupScreen = () => {
    const [showpass, setShowpass] = useState(false)
    const [visible, setVisible] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box_input}>
                <View style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Họ Tên'
                        placeholderTextColor='#000'
                    />
                    <Icon
                        style={styles.icon}
                        name={'person-outline'}
                        size={26}
                    />
                </View>
                <View style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Số điện thoại'
                        placeholderTextColor='#000'
                        keyboardType='number-pad'
                    />
                    <Icon
                        style={styles.icon}
                        name={'ios-call-outline'}
                        size={26}
                    />
                </View>
                <View style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor='#000'
                    />
                    <Icon
                        style={styles.icon}
                        name={'mail-outline'}
                        size={26}
                    />
                </View>
                <View style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Mật khẩu'
                        placeholderTextColor='#000'
                        secureTextEntry={visible}
                    />
                    <Icon
                        style={styles.icon}
                        name={'lock-closed-outline'}
                        size={26}
                    />
                    <TouchableOpacity
                        style={styles.icon_right}
                        onPress={() => {
                            setShowpass(!showpass),
                                setVisible(!visible)
                        }}
                    >
                        <Icon
                            name={!showpass ? 'eye-off-outline' : 'eye-outline'}
                            size={26}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.input_form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Ngày sinh'
                        placeholderTextColor='#000'
                    />
                    <Icon
                        style={styles.icon}
                        name={'ios-calendar-outline'}
                        size={26}
                    />
                    {/* <TouchableOpacity
                        style={styles.icon_right}
                    >
                        <Icon
                            name={'ios-pencil-outline'}
                            size={26}
                        />
                    </TouchableOpacity> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.text_login}>ĐĂNG KÝ</Text>
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
            </View>
        </SafeAreaView>
    )
}

export default SignupScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //=========== Input-form ===========
    box_input: {
        flex: 1,
        marginVertical: 10,
    },
    input_form: {
        marginVertical: 10,
    },
    input: {
        width: DimensionApp.getWIDTH() - 40,
        height: 45,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        paddingLeft: 45,
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 12,
    },
    icon_right: {
        position: 'absolute',
        top: 8,
        right: 12
    },
    //======== Button =============
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: DimensionApp.getWIDTH() - 40,
        height: 45,
        backgroundColor: '#c79a00',
        borderRadius: 5
    },
    box_text: {
        flexDirection: 'row',
        marginVertical: 10
    },
    text_btn: {
        fontSize: 14,
        fontWeight: '400'
    },
    text_login: {
        fontSize: 20,
        fontWeight: '700',
        // color: '#255d00'
        color: '#fff'
    },
})