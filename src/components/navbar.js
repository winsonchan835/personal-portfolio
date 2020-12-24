import React from 'react';
import Link from 'gatsby-link'

const Navbar = () => {
  return (
    <div style={{
      margin: '0',
      backgroundColor: 'maroon',
    }}>
      <ul style={{
      display: 'flex',
      listStyle: 'none',
      textDecoration: 'none',
      justifyContent: 'space-evenly'
    }}>
        <li>{<Link to='/about/'>About</Link>}</li>
        <li>{<Link to='/resume/'>Resume</Link>}</li>
        <li>{<Link to='/projects/'>Projects</Link>}</li>
        <li>{<Link to='/contact/'>Contact</Link>}</li>
      </ul>
    </div>
  )
}

export default Navbar
