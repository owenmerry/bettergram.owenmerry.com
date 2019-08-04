// This is the Link API
import Link from 'next/link'
import Header from '../components/header'

const Index = () => (
  <div>
  <Header />
    <div className="link">
        <Link href="profile?id=-LcH3_cySnZobSDrvnhc">
            <a>Owen Merry</a>
        </Link>
        <Link href="settings?id=-LcH3_cySnZobSDrvnhc">
            <a>Admin</a>
        </Link>
    </div>
    <div className="link">
        <Link href="profile?id=-LkUzpd6f94wSjjKt-Hp">
            <a>Jane Doe</a>
        </Link>
        <Link href="settings?id=-LkUzpd6f94wSjjKt-Hp">
            <a>Admin</a>
        </Link>
    </div>
    <div className="link">
        <Link href="settings">
            <a>Settings</a>
        </Link>
    </div>
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