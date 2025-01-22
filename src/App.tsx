import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

function About() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-blue-100'>
      <Card className='tw-w-full tw-max-w-md'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>About</CardTitle>
          <CardDescription className='tw-text-center'>Learn more about us</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='tw-text-center'>This is the about page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
function Services() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-blue-100'>
      <Card className='tw-w-full tw-max-w-md'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>Services</CardTitle>
          <CardDescription className='tw-text-center'>Learn what we offer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='tw-text-center'>This is the services page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
function Works() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-blue-100'>
      <Card className='tw-w-full tw-max-w-md'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>Our Work</CardTitle>
          <CardDescription className='tw-text-center'>Learn how we have done</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='tw-text-center'>This is the works page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
function Contact() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-blue-100'>
      <Card className='tw-w-full tw-max-w-md'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>Contact</CardTitle>
          <CardDescription className='tw-text-center'>Learn how to reach us</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='tw-text-center'>This is the contact page.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function FRP() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-blue-100'>
      <Card className='tw-w-full tw-max-w-md'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>FRP Tools</CardTitle>
          <CardDescription className='tw-text-center'>Learn about our FRP tools</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='tw-text-center'>This is the FRP tools page.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-r from-blue-50 to-purple-50'>
        <NavigationMenu className='tw-p-4 tw-border-b'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/about'
                  className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/services'
                  className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'
                >
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/ourWork'
                  className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'
                >
                  Our Work
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/contact'
                  className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/frp'
                  className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'
                >
                  FRP Tools
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourWork' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/frp' element={<FRP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
