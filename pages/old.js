// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <div className="link">
        <Link href="profile">
            <a>Owen Merry</a>
        </Link>
    </div>
    <div className="link">
        <Link href="settings">
            <a>Settings</a>
        </Link>
    </div>
  </div>
)

export default Index