import './FaceRecognition.css';
// import styled from 'styled-components'

// const inputImg = styled.div`
//  width:  max(200px, 200px);
// `;


const FaceRecognition = ({imgUrl, box}) => {
  return (
    <div className='faceRecSect '>
      <div className='imgHolder absolute mt2'>
        {/* <img src={'https'} alt=""/> */}
        {/* <img src={'https://samples.clarifai.com/face-det.jpg'} alt=""/> */}

        <img id='inputImage'  alt='' src={imgUrl}  />
        
        {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol}} ></div> */}
        <div className='bounding-box' style={{inset: `${box.top}% ${box.right}% ${box.bottom}% ${box.left}%`,}} ></div>
      </div>
    </div>
      
  );
}

export default FaceRecognition;