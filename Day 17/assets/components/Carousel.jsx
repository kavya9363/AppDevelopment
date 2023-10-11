import '../css/Carousel.css'

function Carousel() {

  return (
    <div className='card-body'>
     <div className="profile">
        <img src='https://upload.wikimedia.org/wikipedia/en/c/c0/NezukoKamado.png'  className='profile-img'/>
     </div>
     <div className="profile-content">
        <div className="profile-title">
            <p className='profile-header'>Nazuko</p>
        </div>
        <div className="profile-role">
            <p className="role">Student</p>
        </div>
        <div className="profile-description">
            <p className="desc">This webapp made the process of admission easier</p>
        </div>
     </div>
    </div>
  );
}

export default Carousel;