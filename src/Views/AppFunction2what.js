import React, { useState, useEffect } from 'react'
// import React, { Component, useState } from 'react'

import Home from './Views/Home'
import Nav from './Components/Nav'
import News from './Views/News'
import Feed from './Views/Feed'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import axios from 'axios';
import ToDo from './Views/ToDo'
import FUNCTEST from './Components/test'
import Doing from './Views/Doing'
import Login from './Views/Login'
import Signup from './Views/SignUp'
import RecipeReviewCard from './Components/ExampleCard'
import PokemonList from './Views/PokemonList'
import Pagination from './Components/Pagination'


export default function App() {
    const [test, setTest] = useState(0);
    const [age, setAge] = useState(9000);
    const [myList, setMyList] = useState([]);

    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    // const [user, setUser] = useState({
    //     token: '',
    //     username: ''
    // });



    const happyBirthday = () => {     // arrow function is necessary otherwise you would have to bind() this method 
        console.log('yesh the button was clicked')
        // this.state.age += 1 this way is incorrect
        //instead use setter method
        setAge(age + 1)
    }


    const addToDoing = (e) => {
        e.preventDefault();
        const text = e.target.myText.value
        setMyList(myList.concat([text]))
    };

    // step 5 of Doing.js, deleting item, changing state
    const deleteDoing = (indexToDelete) => {
        const copy = [...myList]
        copy.splice(indexToDelete, 1)
        // this.setState({ myList: copy })
        setMyList(copy)
    }

    useEffect(() => {
        // setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            // setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.next)
            setPokemon(res.data.results.map(p => p.name))
        })
        return () => cancel() //if there's a current request, cancel it
    }, [currentPageUrl])


    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
      }
    
      function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
      }

    // if (loading) return "Loading... please wait"


    return (
        <StyledEngineProvider>
            <BrowserRouter>
                {/* anything inside the Browser Router will be aware of the ROUTES we create
        sort of like @app.route or @poke.route    */}

                <div>
                    <Nav />
                    <Routes>
                        {/* curly braces to add JS */}
                        <Route path='/'
                            element={<Home testVar={test} x='5000' age={age} happyBirthday={happyBirthday} />}
                        />

                        <Route path='/news' element={<News />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/todo' element={<RecipeReviewCard />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/doing' element={<Doing myList={myList} handleDoingSubmit={addToDoing} deleteDoing={deleteDoing} />} />
                        <Route path='/test' element={<FUNCTEST namethiswhatever={age} happyBirthday={happyBirthday} />} />

                        <>
                        <Route path='/pokemonlist' element={<PokemonList pokemon={pokemon} />} />
                        {/* <PokemonList pokemon={pokemon} /> */}
                        <Pagination 
                                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
                            />
                        </>
                    </Routes>

                </div>
            </BrowserRouter>
        </StyledEngineProvider>
    )

}