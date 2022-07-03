import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const navigation = useNavigate()
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        accusantium totam ex asperiores eveniet nesciunt iusto quos officia amet
        est nobis ipsam nihil necessitatibus, inventore vero eos perferendis.
        Quasi, quibusdam.
      </p>
      <button className='btn' onClick={() => navigation('/')}>
        Обратно к списку дел
      </button>
    </>
  )
}
