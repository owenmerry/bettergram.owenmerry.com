// This is the Link API
import Link from 'next/link'
import Header from '../components/header'

const Index = () => (
  <div>
  <Header />
    <Link href="/index">
      <a>Home Page</a>
    </Link>
    <p>BetterGram About Page</p>
    <style global jsx>{`
        body{
                padding:0px;
                margin:0px;   
                font-family:Helvetica; 
        }
        `}</style>
  </div>
)

export default Index