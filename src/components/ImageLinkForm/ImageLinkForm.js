
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return(
    <div className='imageLinkForm '>
      <p>
        {'This Magic Brain will detect faces in your pictures. Git it a try'}
      </p>
      <div id="inputSec" className=' glassMorphism ' >
        <input  type="tex" name="" id="imgSrc" onChange={onInputChange} />
        <button id="btn-detect" onClick={onButtonSubmit} >Detect</button>
      </div>
    </div>
    );
}

export default ImageLinkForm;