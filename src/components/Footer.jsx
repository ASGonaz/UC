import React from 'react'

const Footer = () => {
  let current = new Date();
  return (
	 <footer class="py-3 ">
    <div class="container">
 
  
    <p class="text-center ">© {(current.getFullYear())} Dev By <a href="https://wa.me/qr/YRU2ZKKU32YWM1">Sameh</a></p>
  
</div>
</footer>
  )
}

export default Footer