import './NotFound.css';

function NotFound() {
  return (
    <div>
      <div className="NotFound-wrapper">
        <div className="container">
          <div className='img-wrapper'>   
             <img className="error" src="404.png" alt="Описание изображения" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;