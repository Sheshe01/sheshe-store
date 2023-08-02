import React from 'react'
import PersonalData from './FormSteps/PersonalData'
import OrderDetails from './FormSteps/OrderDetails'
import { ProductModel } from 'domain/models'
import SuccessMessage from './FormSteps/SuccessMessage'

export const getStepsData = (products: ProductModel[]) => {
  const data = [
    {
      id: 1,
      title: 'Detalhes de faturamento',
      component: <PersonalData />
    },
    {
      id: 2,
      title: 'Pagamento',
      component: <OrderDetails products={products} />
    },
    {
      id: 3,
      title: 'Compra realizada com sucesso',
      component: <SuccessMessage />
    }
  ]
  return data
}
