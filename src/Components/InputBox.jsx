import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { requestUrlShortenerActions } from '../_Actions/UrlShortnerAction';
import MasterLayOut from './MasterLayOut'

const InputBox = () => {


    const [long_url, setUrl] = useState('')
    const dispacth = useDispatch();
    
    const urlDataUpdate = (e, key) => {
        setUrl({ ...long_url, [key]: e.target.value });
    };

    const submitUrl = (e) => {
        e.preventDefault();
        dispacth(requestUrlShortenerActions(long_url));
        console.log(long_url, 'urls updated');

    }
  return (
      <div className='py-5'>
 
  <div className="input-group mb-3">
              <input type="text"
                  className="form-control"
                  name="long_url"
                  placeholder="Hey Friends Put Your url here"
                  aria-label="Hey Friends Put Your url here"
                  aria-describedby="button-addon2"
                  onChange={(e)=> urlDataUpdate(e,'long_url')}
              />
              <button className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={submitUrl}
              >Short Your Url</button>
  </div>
</div>
  )
}

export default InputBox