import react from "react";
import '../App.css'
import '../fonts/Gilroy-Regular/style.css'
import '../fonts/Gilroy-Light/style.css'
import '../fonts/Gilroy-Extrabold/style.css'
import '../fonts/DINPro/style.css'

const Home = () => {
  return(
    <div className='home'>
      <div className="bg-image pink_sperm"></div>
      <div className='bg-image bacteria_1'></div>
      <div className='bg-image bacteria_2'></div>
      <div className="bg-image pink_sperm_2"></div>
      <div className='bg-image bacteria_3'></div>
      <div className='bg-image bacteria_4'></div>
      <div className='bg-image bacteria_5'></div>
      <div className='bg-image bacteria_6'></div>
      <div className='bg-image bacteria_7'></div>
      <div className="title">
        <div className="title_label">Привет, </div>
        <h1 className="title_main">
          Это <strong>не</strong> <br/> коммерческое <br/> задание 
          <button className="next_btn">
            <div className='btn_content'>
              <div className="circle">→</div>
              Что дальше?
            </div>
          </button>
        </h1>
      </div>
    </div>
  )
}

export default Home