import React from 'react'
import {useParams} from 'react-router-dom';
import { useProductDetails } from '../context/ProductContext';

function DetailsPage() {
  const {id} = useParams()

  const productDetails = useProductDetails(+id)

  if(!productDetails)return <Loader /> 
  return (
    <div>DetailsPage - {id}</div>
  )
}

export default DetailsPage