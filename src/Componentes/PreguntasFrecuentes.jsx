import React from 'react'
import CardPregunta from './CardPregunta'

function PreguntasFrecuentes() {
  return (
    <div id='Preguntas' className='h-screen text-center m-8'>
        <h1>PREGUNTAS FRECUENTES</h1>
        <div className='flex gap-8 mt-8'>
        <CardPregunta />
        <CardPregunta />
        <CardPregunta />
        </div>
    </div>
  )
}

export default PreguntasFrecuentes