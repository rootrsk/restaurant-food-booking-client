import React from 'react'
import Link from 'next/link'
export default function Homepage() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias eos harum dignissimos quo, eligendi officia laboriosam debitis error ad eum temporibus omnis, hic fugit unde, non itaque nam sunt.
      Officiis, provident facilis eveniet repellat consequatur, aspernatur, tempora recusandae praesentium et laudantium veritatis corrupti reiciendis? Blanditiis tempore et, sequi esse a cupiditate distinctio quod nesciunt placeat quis, expedita, rerum minima!
      Tempora quod quibusdam accusantium necessitatibus ullam officiis nulla quaerat atque laboriosam alias, officia quos odio voluptates ut. Excepturi nam vitae architecto facere doloremque, sapiente quam dicta! Magni amet nesciunt labore!</p>
      <Link href='/admin/' >Dashboard</Link>
    </div>
  )
}