const now = new Date()
import logo from '/logo-name.svg'

export default function Header(){
  return(
      <header>
        <img src={logo} alt="logo" />
        {/* <h3>Result University</h3> */}

        <span>Время сейчас: {now.toLocaleTimeString()}</span>
      </header>
  )
 }