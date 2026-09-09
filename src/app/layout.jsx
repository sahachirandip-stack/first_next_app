import  'bootstrap/dist/css/bootstrap.min.css'


import './globals.css'
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const RootLayout = ({children}) =>{
    return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1327.0" data-gr-ext-installed="" data-gr-ext-go-mode="" data-gr-aaa-loaded="14.1327.0"     data-gr-aaa-notch-connection-id="1788924930384-0.8265849103039055"
data-gr-agent-presence-bridge-connection-id="1788924930388-0.5510672798950602"
__processed_578e6432-03e1-4ba2-baec-445a89542d69__="true"
cz-shortcut-listen="true">
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