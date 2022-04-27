import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import Colors from '../constants/Colors';
import { getAllQuizzes } from '../api/quizzes'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { map, size } from 'lodash';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import {
    congratsButton,
    failButton
  } from '../helpers/audio';

const Quiz = ({ route, navigation } ) => {
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
                    alignItems: 'flex-end'

                }}>
                    <Text style={{ color: Colors.blueColor, fontSize: 20, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1}</Text>
                    <Text style={{ color: Colors.blueColor, fontSize: 18, opacity: 0.6 }}>{size(questions)}</Text>
                </View>
                {/*Question*/}
                <Text style={{
                    color: Colors.blueColor,
                    fontSize: 30
                }}>{
                        //questions.question
                        questions[currentQuestionIndex]?.question
                    }</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    questions[currentQuestionIndex]?.options.map(option => (
                        //questions.options.map(option => (
                        <TouchableOpacity
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            //onPressIn={(option == correctOption) ? congratsButton : (option == currentOptionSelected) ? failButton : congratsButton}
                            style={{
                                borderWidth: 3,
                                borderColor: option == correctOption
                                    ? Colors.success
                                    : option == currentOptionSelected
                                        ? Colors.error
                                        : Colors.secondary + '40',
                                backgroundColor: option == correctOption
                                    ? Colors.green + '20'
                                    : option == currentOptionSelected
                                        ? Colors.error + '20'
                                        : Colors.secondary + '20',
                                height: 60, borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                marginVertical: 10,
                            }}>
                            <Text style={{ fontSize: 20, color: Colors.blueColor }}> {option} </Text>

                            {/*Show Check or cross based on correct answer*/}

                            {
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: Colors.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: Colors.blueColor,
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
                                            color: Colors.blueColor,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
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
                        marginTop: 20, width: '100%', backgroundColor: Colors.accent, padding: 20, borderRadius: 5
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
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: Colors.accent
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
                <Text style={{
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}>Lo sentimos esta exhibición actualmente no tiene preguntas</Text>
            ) : (
                <View style={{
                    flex: 1,
                    paddingVertical: 40,
                    paddingHorizontal: 16,
                    backgroundColor: Colors.backgroundColor,
                    position: 'relative'
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
                            backgroundColor: Colors.primaryColor,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                backgroundColor: Colors.blueColor,
                                width: '90%',
                                borderRadius: 20,
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold',fontFamily:'Boogaloo-Regular' }}>{score > (size(questions) / 2) ? '¡Bien hecho, Lo lograste!' : '¡Intentalo de nuevo!'}</Text>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginVertical: 20
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                        color: score > (size(questions) / 2) ? Colors.success : Colors.error,fontFamily:'Boogaloo-Regular'
                                    }}>{score}</Text>
                                    <Text style={{
                                        fontSize: 20, color: Colors.black,fontFamily:'Boogaloo-Regular'
                                    }}>/ {size(questions)}</Text>
                                </View>
                                {/* Retry Quiz button */}
                                <TouchableOpacity
                                    onPress={restartQuiz}
                                    style={{
                                        backgroundColor: Colors.accent2,
                                        padding: 20, width: '100%', borderRadius: 40, marginBottom: 20,fontFamily:'Boogaloo-Regular'
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: Colors.black, fontSize: 20,fontFamily:'Boogaloo-Regular'
                                    }}>Vuelve a intentarlo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.goBack() }}
                                    style={{
                                        backgroundColor: Colors.accent2,
                                        padding: 20, width: '100%', borderRadius: 40
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: Colors.black, fontSize: 20,fontFamily:'Boogaloo-Regular'
                                    }}>Salir</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>

                </View>
            )}
        </SafeAreaView >
    )
}

export default Quiz;