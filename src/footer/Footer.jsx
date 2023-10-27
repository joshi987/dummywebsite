import '../footer/foot.css'
import Group from '../footer/img/Group 2.png'

function Footer() {
  return (
    <div className='foot'>
    <div className='foot-1'>
        <ul>
            <li className=' logo'>Snazzy<span className='lawyer'>lawyer</span></li>
            <li className='mail'>help@snazzylawyer.com</li>
            <li className='phone'>+48 601 908 812</li>
        </ul>
      </div>
      <div className='specialalties'>
        <ul>
            <li className='special-inside special-inside-1'>Specialties</li>
            <li className='special-inside'>Family law</li>
            <li className='special-inside'>Crimal law</li>
            <li className='special-inside'>Labour law</li>
            <li className='special-inside'>Real estate</li>
        </ul>
      </div>
      <div className="compensation">
        <ul>
            <li className='comp-ins'>Compensation</li>
            <li className='comp-ins'>Succession matters</li>
            <li className='comp-ins'>Consumer bankruptcy</li>
            <li className='comp-ins'>Drafting and reviewing contracts</li>
        </ul>
      </div>

      <div className="resourse">
        <ul>
            <li className='res-inside res'>Resources</li>
            <li className='res-inside'>FQA</li>
            <li className='res-inside'>Blog</li>
            <li className='res-inside'>Kontakt</li>
        </ul>
      </div>
      <div className='last'>
      <div className='snazz'>©SnazzylawyerAll Right Reserved </div>
      <img src={Group} alt="" /> <div className='privacy'>Privacy policy</div></div>
    </div>
  )
}

export default Footer