import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
  return (
    <div className='homeScreen'>
    <Nav/>
        <img 
        className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo'/>
        

        <img 
        className='nav_avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png' alt='avatar'/>

       
<h1>Rishav</h1>
    <Rows
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
      />
      <Rows
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Rows
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Rows
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Rows
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Rows
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Rows
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
      />
    
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
<h1>test</h1>
   {/* Banner */}

   {/* Row */} 
   </div>
  )
}

export default HomeScreen
