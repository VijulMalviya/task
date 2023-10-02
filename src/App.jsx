import React from 'react'
import './main.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import DirectoryScreen from './components/screens/directory-screen'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Box } from '@mui/material'
import UserDetail from './components/screens/user-details'

const App = () => {
  return (
    <>
    <Header/>
    <Box className="space-from-top">
    <Routes>
      <Route path='/' element={<DirectoryScreen />} />
      <Route path='/userdetails/:id' element={<UserDetail />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>

    </Box>
    <Footer/>
    </>
  )
}

export default App