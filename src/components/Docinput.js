import React from 'react'
import images from '../images/images.png'
import './Docinput.css'


const Docinput = () => {

    const buttonClicked = event => {
        document.getElementsByClassName('img-file').css('visiblity:visible');
        console.log(event);
    }

    const fileSelectedHandler = event =>{
        console.log(event);
    }

  return (
    <>
        <div class='container'>
        <div class='row first'>
            <div class='col-2'>
            <label for='files' class='img-div' onClick={buttonClicked}><img class='img-d' src={images} alt='https://iconarchive.com/tag/upload-image'/></label>
            </div>
            <div class='col-3'>
                <div class='input-file'>
                <input type="file" class="form-control" id="files"/>
                </div> 
            </div>
        </div>
        <div class='row second'> 
        <div class='col-5 inside-sec'>
            <textarea class='textarea' cols='57' placeholder='Write your description here....' rows='15' maxLength='1000' minLength='3' ></textarea>
            {/* <span class='textarea_count'>0/100(Max character 100)</span> */}
        </div>
        </div>
        </div>
    </>
  )
}

export default Docinput