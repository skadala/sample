import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-menu'>
        <ul><li><Link to='/'>home</Link></li><li><Link to='cake'>cake</Link></li><li><Link to='icecream'>icecream</Link></li><li><Link to='user/1'>user</Link></li></ul>
    </div>
  )
}

export default Header