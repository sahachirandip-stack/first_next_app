import  'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const RootLayout = ({children}) =>{
    return (
    <html lang="en">
      <body>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
      </body>
    </html>
    )
}
export default RootLayout;