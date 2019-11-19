import React from 'react'
import { useCats} from '../hooks'
import { Link } from 'react-router-dom'

export default props => {
  const { categories } = useCats()
  
  return (
    <div className="middle">
      <div className='city'>
        <p>las vegas</p> 
      </div>
      <div className="categories">
        {categories.map((cat, i) => 
        <div key={'blah' + i} className='category'>
          <Link to={"/" + cat.slug}>
            <h3>{cat.name}</h3>      
          </Link>
          <div className="section">
          <ul className="subsection">
            {cat.children.map((sub, i) => 
            <Link key={i} to={`/${sub.slug}`}>
              <li>{sub.name}</li>
            </Link>)}
          </ul>
          </div>
       </div>
      )}
      </div>
    </div>
  )
}