import { useState } from 'react'

import './App.css'
import * as strings from './assets/Textos.js'

function App() {

  return (
    <>
      {/* 
    
    
    
    */}
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
            <h1>{strings.default.site}</h1>
            <p>Transforme sua Paixão em Profissão com Nossos Cursos de Educação Física!</p>

            <p> Descubra como alinhar seu amor pelo esporte e bem-estar a uma carreira gratificante. Nossos cursos de Educação Física oferecem a formação completa que você precisa para se tornar um profissional capacitado e preparado para atuar em diversas áreas, como personal trainer, professor de educação física e especialista em wellness. Com conteúdo atualizado, professores experientes e uma metodologia prática, você terá todas as ferramentas para se destacar no mercado. Venha transformar sua paixão em uma profissão de sucesso e inspire outras pessoas a alcançarem seus objetivos!</p>
            <a href="#" class="cta-button">Cadastrar-se</a>
          </div>
          <div class="hero-image">
            <div class="placeholder-image"></div>
          </div>
        </div>
      </section>

      <section class="course-info">
        <div class="course-video">
          <div class="video-placeholder">
            <video controls>
              <source src="src/assets/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
        <div class="course-details">
          <h2>Curso 100% ONLINE</h2>
          <p>Estude à distância com total flexibilidade! Nossa plataforma intuitiva permite que você acesse o conteúdo do curso de Educação Física de qualquer lugar e a qualquer hora. Aprenda no seu ritmo, aproveitando recursos interativos e material atualizado que se adapta à sua rotina. Não perca a chance de se qualificar sem sair de casa e comece sua jornada rumo a uma carreira de sucesso!</p>
          <h3>Carga Horária 20 HORAS</h3>
          <p>A carga horária desse curso é de 20 horas, baseada no conteúdo disponível do curso.</p>
        </div>
      </section>

      <section class="course-description">
        <h2>Descrição do curso</h2>

        <p>
            O curso online Atletismo na Escola é produzida pela confederação Brasileira de atletismo (CBAt) e pela
            Impulsiona...
        </p>

    </section>

    <div class="video-section">
        <video controls>
            <source src="video.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
        </video>
        <div class="sidebar">
            <h3>Conteúdos das Aulas</h3>
            <ul>
                <li>Aula 1: Introdução</li>
                <li>Aula 2: Fundamentos</li>
                <li>Aula 3: Técnicas</li>
                <li>Aula 4: Prática</li>
                <li>Aula 5: Conclusão</li>
            </ul>
        </div>
    </div>
    <footer>
        <p>Connect with us</p>
        <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
        <p>© 2024 Curso de Educação Física</p>
    </footer>

    </>
  )
}

export default App
