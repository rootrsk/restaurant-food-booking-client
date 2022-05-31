import { useRouter } from 'next/router'
import React from 'react'

function user_token(x) {
  const router = useRouter()
  console.log(router)
  console.log(x)
  return (
    <div>user_token</div>
  )
}

export default user_token