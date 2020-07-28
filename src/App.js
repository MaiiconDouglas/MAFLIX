import React from 'react';

import Menu from './components/Menu';

import dados_iniciais from './data/dados_iniciais.json';

import BannerMain from './components/BannerMain';

import Carrousel from './components/Carousel';

import Footer from './components/Footer';

function App() {
  return (

    <div>
      <Menu />    

      <BannerMain 
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}        
      />

      <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[0]}
      />

       <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[1]}
      />

       <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[2]}
      />

       <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[3]}
      />

       <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[4]}
      />

       <Carrousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[5]}
      />

      <Footer />
       
    </div>
  );
}

export default App;
