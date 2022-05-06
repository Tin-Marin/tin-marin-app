import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, ImageBackground, TouchableOpacity, Modal, Animated, Dimensions, ViewPropTypes } from 'react-native'
import Colors from '../constants/Colors';
import { getAllQuizzes } from '../api/quizzes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { map, size } from 'lodash';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import {
    congratsButton,
    failButton
} from '../helpers/audio';

const { wWidth, wHeight } = Dimensions.get('window');

const Quiz = ({ route, navigation }) => {
    const questionE = route.params;
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllQuizzes().then((response) => {
            map(response, (q) => {
                if (q.exhibition == questionE) {
                    setQuestions(questions => [...questions, q]);
                }
            });
        });
        setLoading(false);
    }, []);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    function validateAnswer(selectedOption) {
        let correct_option = questions[currentQuestionIndex]?.correct_option;
        //let correct_option = questions[currentQuestionIndex]['correct_option'];
        console.log('array', questions[currentQuestionIndex]?.correct_option);
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if (selectedOption == correct_option) {
            //Set Score
            congratsButton();
            setScore(score + 1);
            //Show Next Button
        } else {
            failButton();
        }
        setShowNextButton(true)
    }

    const handleNext = () => {
        if (currentQuestionIndex == size(questions) - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View>
                {/*Question Counter*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    marginTop: -74,
                    marginLeft: 2,
                }}>
                    <Text style={{ color: Colors.tmBlue, fontSize: 30, opacity: 0.6, marginRight: 1, marginLeft: 3 }}>{currentQuestionIndex + 1}</Text>
                    <Text style={{ color: Colors.tmBlue, fontSize: 22, opacity: 0.6 }}>/ {size(questions)}</Text>
                </View>
                {/*Question*/}
                <Text style={{
                    color: 'black',
                    fontSize: 25,
                    textAlign: 'left',
                    marginTop: 30,
                    marginLeft: 5,
                    width: '95%',
                    marginBottom: 30
                }}>{
                        //questions.question
                        questions[currentQuestionIndex]?.question
                    }</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                {
                    questions[currentQuestionIndex]?.options.map(option => (
                        //questions.options.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            //onPressIn={(option == correctOption) ? congratsButton : (option == currentOptionSelected) ? failButton : congratsButton}
                            style={{
                                /*borderWidth: 3,
                                borderColor: option == correctOption
                                    ? Colors.tmYellow + '80'
                                    : option == currentOptionSelected
                                        ? Colors.tmGreen + '80'
                                        : Colors.error + '80',*/
                                backgroundColor: option == correctOption
                                    ? Colors.success
                                    : option == currentOptionSelected
                                        ? Colors.error
                                        : 'white',
                                height: 60, width: '90%', borderRadius: 10,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'flex-start',
                                marginVertical: 10,

                                shadowColor: '#470000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                elevation: 4,
                            }}>
                            <Text style={{ fontSize: 18, color: 'black' }}> {option} </Text>

                            {/*Show Check or cross based on correct answer*/}

                            {/*
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: Colors.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: 'white',
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: Colors.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: 'white',
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null*/
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        marginTop: 30, width: '55%', borderRadius: 20, backgroundColor: Colors.tmBlue, padding: 15,
                        marginHorizontal: 65,
                        shadowColor: '#470000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.2,
                        elevation: 3,
                    }}>
                    <Text style={{ fontSize: 20, color: Colors.white, textAlign: 'center' }}>Siguiente</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, size(questions)],
        outputRange: ['0%', '100%']
    })

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '78%',
                height: 20,
                borderRadius: 15,
                backgroundColor: '#00000020',
                marginTop: 30,
                marginBottom: 40,
                marginLeft: '20%',

                shadowColor: '#470000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                elevation: 3,
            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 15,
                    backgroundColor: '#2b33f7'
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            {loading ? (
                <StatusBar barStyle='light-content' backgroundColor={Colors.primaryColor} />
            ) : size(questions) == 0 ? (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    paddingVertical: 40,
                    paddingHorizontal: 16,
                    position: 'relative',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 20,
                        marginBottom: 50
                    }}>Lo sentimos esta exhibición actualmente no tiene preguntas.</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{
                            width: '100%', backgroundColor: Colors.tmBlue /*score > (size(questions) / 2) ? Colors.green : Colors.error*/,
                            padding: 20, borderRadius: 20, marginBottom: 20
                        }}>
                        <Text style={{
                            textAlign: 'center', color: 'white', fontSize: 20
                        }}>Salir</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{
                    flex: 1,
                    paddingVertical: 40,
                    paddingHorizontal: 16,
                    position: 'relative',
                    backgroundColor: '#b8c6e6'
                }}>

                    {/* ProgressBar */}
                    {renderProgressBar()}

                    {/* Question */}
                    {renderQuestion()}

                    {/* Options */}
                    {renderOptions()}

                    {/* Next Button */}
                    {renderNextButton()}

                    {/* Score Modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showScoreModal}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: '#b8c6e6' /*score > (size(questions) / 2) ? Colors.tmBlue : Colors.error*/,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                backgroundColor: 'white' /*score > (size(questions) / 2) ? Colors.tmYellow : Colors.tmViolet*/,
                                width: '90%',
                                borderRadius: 20,
                                padding: 20,
                                alignItems: 'center',

                                shadowColor: '#470000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.2,
                                elevation: 6,
                            }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{score > (size(questions) / 2) ? '¡Bien hecho, lo lograste!' : '¡Tu puedes, intentalo de nuevo!'}</Text>
                                {score > (size(questions) / 2) ? (
                                    <MaterialCommunityIcons name="thumb-up" style={{
                                        color: Colors.green,
                                        fontSize: 40,
                                        marginTop: 10
                                    }} />
                                ) : (
                                    <MaterialCommunityIcons name="close" style={{
                                        color: Colors.error,
                                        fontSize: 40,
                                        marginTop: 10
                                    }} />
                                )}
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginVertical: 20,
                                    marginTop: 15
                                }}>
                                    <View style={{
                                        width: 20, height: 20, borderRadius: 15 / 2,
                                        backgroundColor: score > (size(questions) / 2) ? Colors.green : Colors.error,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        shadowColor: '#000000',
                                        elevation: 3,
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            color: 'white'
                                        }}>{score}</Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 20, color: Colors.black
                                    }}>/{size(questions)}</Text>
                                </View>
                                {/* Retry Quiz button */}
                                <TouchableOpacity
                                    onPress={restartQuiz}
                                    style={{
                                        width: '100%', backgroundColor: Colors.tmBlue /*score > (size(questions) / 2) ? Colors.green : Colors.error*/,
                                        padding: 20, borderRadius: 20, marginBottom: 20
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: 'white', fontSize: 20
                                    }}>Vuelve a intentarlo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.goBack() }}
                                    style={{
                                        width: '100%', backgroundColor: Colors.tmBlue /*score > (size(questions) / 2) ? Colors.green : Colors.error*/,
                                        padding: 20, borderRadius: 20, marginBottom: 20
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: 'white', fontSize: 20
                                    }}>Salir</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>
                    {/*<ImageBackground source={require('../assets/logoDrawer.png')} resizeMode='cover' 
                    style={{
                        width: 400,
                        height: 400,
                        bottom: 400,
                        right: 35
                    }}>

                </ImageBackground>*/}

                </View>
            )}
        </SafeAreaView >
    )
}

export default Quiz;