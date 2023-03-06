const Layout = ({children,styles}) => {
    return <div className={`max-w-7xl mx-auto px-6 ${styles}`}>{children}</div>;
}
 
export default Layout;
