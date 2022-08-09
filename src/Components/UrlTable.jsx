import React, { useEffect } from 'react'
import { NavItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { requestIpRedirect, requestUrlByUser } from '../_Actions/UrlShortnerAction';
import { Link  ,Route} from 'react-router-dom'


const UrlTable = () => {
    const { allurl } = useSelector((store) => store.shorturl);

    const urls = allurl.urlbyUser;

    console.log(allurl.urlbyUser, 'short');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUrlByUser());
    }, []);

    const banHandler = (url) => {
        window.location.href = `${url}`; 
        // window.open(`$`);

        dispatch(requestIpRedirect());
        return null;
    }
 


  return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">SL</th>
      <th scope="col">Key</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
  {urls?.map((item , index) => {
              return <tr>
                  <th scope="row">{ index+ 1}</th>
                  <td>localhost:3000/{ item.key}</td>
                  <td>
                      {/* <a href={`${item.long_url}`} target="_blank" >path</a> */}
                      <Link to={`/${item.key}`}  onClick={() => banHandler(item.long_url)} >View</Link>

                  </td>
            </tr>
          })}
    
  </tbody>
</table>
  )
}

export default UrlTable


