import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
import '../styles/globals.css'

import SidebarItem from '../components/SidebarItem';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Teddy Box</title>
        <meta name="description" content="Created by @DoomedRamen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="w-full h-screen rounded drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <main className='bg-base-content'>
            <div className="navbar bg-base-100">
              <div className="flex-none">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <a className="text-xl normal-case btn btn-ghost">TeddyBox</a>
              </div>
            </div>
            <div className="container px-4 mx-auto">

              <Component {...pageProps} />
            </div>
          </main>
        </div>


        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto w-60 menu bg-base-100 text-base-content">

            <SidebarItem
              text={"Home"}
              active={'/' == router.pathname}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>}
              link={'/'}
            />
            <SidebarItem
              text={"Tags"}
              active={'/tags' == router.pathname}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>}
              link={'/tags'}
            />
            <SidebarItem
              text={"History"}
              active={'/history' == router.pathname}
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              link={'/history'}
            />


          </ul>
        </div>
      </div>


      {/* <div className="flex text-gray-800 bg-gray-100">

        <div className="w-2/12">
          <SideNav
            items={[
              { text: "Home", active: '/' == router.pathname, icon: HomeIcon, link: '/' },
              { text: "Tags", active: '/tags' == router.pathname, icon: TagIcon, link: '/tags', count: 3, },
              { text: "History", active: '/history' == router.pathname, icon: ClipboardListIcon, link: '/history' },
            ]}
          />
        </div>
        <div className="w-10/12">
          <div className="flex flex-col flex-grow main-content">

            <Component {...pageProps} />

          </div>
        </div>
      </div> */}

    </>
  )
}

export default MyApp
