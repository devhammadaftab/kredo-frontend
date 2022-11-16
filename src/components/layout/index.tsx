import { RoutesConstent } from 'constants/routes';
import React from 'react'
import { Link } from 'react-router-dom';
import { useStore } from 'store/index'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    const { state } = useStore();
    const { categories } = state;

    return <div className="layout">
        <div className="sidebar">
            <div className="links-container">
                <h1>Categories</h1>
                <div className="links"> {
                    categories.map(category => <Link key={category.id} className="buttonCat" to={RoutesConstent.category + String(category.id)}>{category.name}</Link>)
                }</div>
            </div>
            <div className="footer">
                <h5>Footer</h5>
            </div>
        </div>
        <div className="container">
            {children}
        </div>
    </div>
}

export default Layout;