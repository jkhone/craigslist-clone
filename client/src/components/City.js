import React from 'react'
import '../styles/styles.css'

export default props => {
  return (
    <div className="cities">
      <select name="lang">
      <option value="?lang=en&amp;cc=us&amp;setlang=1">english</option>
        <option value="?lang=da&amp;setlang=1">dansk</option>
        <option value="?lang=de&amp;setlang=1">deutsch</option>
        <option value="?lang=es&amp;cc=mx&amp;setlang=1">español</option>
        <option value="?lang=fr&amp;setlang=1">français</option>
        <option value="?lang=it&amp;setlang=1">italiano</option>
        <option value="?lang=pt&amp;setlang=1">português</option>
        <option value="?lang=fi&amp;setlang=1">suomi</option>
        <option value="?lang=sv&amp;setlang=1">svenska</option>
        <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
        <option value="?lang=tr&amp;setlang=1">türkçe</option>
        <option value="?lang=ru&amp;setlang=1">русский</option>
        <option value="?lang=zh&amp;setlang=1">中文</option>
        <option value="?lang=ja&amp;setlang=1">日本語</option>
        <option value="?lang=ko&amp;setlang=1">한국말</option>
      </select>
      <h3>nearby cl</h3>
      <ul>
        <li>bakersfield</li>
        <li>elko</li>
        <li>flagstaff</li>
        <li>fresno</li>
        <li>gold country</li>
        <li>hanford</li>
        <li>imperial co</li>
        <li>inland empire</li>
        <li>los angeles</li>
        <li>merced</li>
        <li>modesto</li>
        <li>mohave co</li>
        <li>orange co</li>
        <li>palm springs</li>
        <li>phoenix</li>
        <li>prescott</li>
        <li>provo</li>
        <li>reno</li>
        <li>salt lake</li>
        <li>san diego</li>
        <li>san luis obispo</li>
        <li>santa barbara</li>
        <li>santa maria</li>
        <li>show low</li>
        <li>st george</li>
        <li>stockton</li>
        <li>tucson</li>
        <li>ventura</li>
        <li>visalia-tulare</li>
        <li>yuma</li>
      </ul>
      <h5>us cities</h5>
      <h5>us states</h5>
      <h5>canada</h5>
      <h5>cl worldwide</h5>
    </div>
  )
}