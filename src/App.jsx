import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
    <div class="navbar">
        <div class="logo">LOGO</div>
        <div class="menu">
            <a href="#">Cursos</a>
            <a href="#">Cadastrar-se</a>
            <a href="#">Entrar</a>
        </div>
    </div>

    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-text">
                <h1>NOME DO SITE</h1>
                <p>Transforme sua Paixão em Profissão com Nossos Cursos de Educação Física!</p>

                   <p> Descubra como alinhar seu amor pelo esporte e bem-estar a uma carreira gratificante. Nossos cursos de Educação Física oferecem a formação completa que você precisa para se tornar um profissional capacitado e preparado para atuar em diversas áreas, como personal trainer, professor de educação física e especialista em wellness. Com conteúdo atualizado, professores experientes e uma metodologia prática, você terá todas as ferramentas para se destacar no mercado. Venha transformar sua paixão em uma profissão de sucesso e inspire outras pessoas a alcançarem seus objetivos!</p>
                <a href="#" class="cta-button">Cadastrar-se</a>
            </div>
            <div class="hero-image">
                <div class="placeholder-image"></div>
            </div>
        </div>
    </section>


    </>
  )
}

export default App
