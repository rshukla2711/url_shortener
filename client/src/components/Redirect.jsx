import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { redirectroute } from '../utils/APIRoutes';

export default function Redirect() {
  const { urlCode } = useParams();
  const serverBaseUrl = redirectroute;

  const redirect = () => {
    let url = (serverBaseUrl + `${urlCode}`);
    window.location.replace(url);
  };

  useEffect(() => {
    if (urlCode) {
      redirect();
    }
  }, [ urlCode ]);
}