import {View, Text, StatusBar, FlatList, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icons from './src/components/Icons';
import Icon from 'react-native-vector-icons/FontAwesome5'

const App = () => {
  const [isCross, setisCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setisCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game!`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game!`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game!`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game!`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game!`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game!`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game!`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game!`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game');
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return <Text>{gameWinner}</Text>;
    }

    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setisCross(!isCross);
    } else {
      return <Text> Position is already filled </Text>;
    }

    checkIsWinner();
  };

  return (
    <>
      <StatusBar backgroundColor={'rgb(15 23 42)'} />

      <View className="bg-slate-900 h-full">
        {gameWinner ? (
          <Text className="p-2 text-3xl textbg-indigo-300 font-thin uppercase text-center text-indigo-300 m-2 mx-4 rounded-md">
            {' '}
            {gameWinner}{' '}
          </Text>
        ) : (
          <Text className="p-2 text-3xl textbg-indigo-300 font-thin uppercase text-center text-indigo-300 m-2 mx-4 rounded-md">
            player {isCross ? 'X' : 'O'}'s Turn
          </Text>
        )}

        <View className=' flex items-center justify-between gap-y-12 m-auto'>

        <FlatList
          numColumns={3}
          className="m-auto"
          data={gameState}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              className=" flex justify-center items-center w-[100px] h-[100px] m-1 border-[1px] border-indigo-300 rounded-lg p-4 "
              onPress={() => onChangeItem(index)}>
              <Icons name={item} />
            </Pressable>
          )}
        />

          <TouchableOpacity onPress={reloadGame} className='p-4 border-[1px] bg-indigo-300 rounded-full shadow-xl shadow-purple-400 m-20 '>
            <Icon name= 'sync' size={30} color= 'rgb(15 23 42)'/>
          </TouchableOpacity>

        </View>

        
      </View>
    </>
  );
};

export default App;
