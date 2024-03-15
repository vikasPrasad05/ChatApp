import React from 'react';
import {Helmet} from 'react-helmet-async';
 
const Title = ({
    title = "ChatHub", 
    description ="this is chat App called chaat"}) => {

  return (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Helmet>

  )
}

export default Title