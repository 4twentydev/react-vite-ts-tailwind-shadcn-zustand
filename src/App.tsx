import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAppStore } from './store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

function Home() {
  const { count, increment, decrement } = useAppStore();

  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-r tw-from-blue-50 tw-to-purple-50'>
      <Card className='tw-w-full tw-max-w-md tw-flex-1'>
        <CardHeader>
          <CardTitle className='tw-text-2xl tw-font-bold tw-text-center'>Home</CardTitle>
          <CardDescription className='tw-text-center'>Welcome to the Home Page</CardDescription>
        </CardHeader>
        <CardContent className='tw-space-y-4'>
          <p className='tw-text-center tw-text-lg'>Count: {count}</p>
          <div className='tw-flex tw-justify-center tw-space-x-7'>
            <Button onClick={increment} className='tw-bg-blue-500 hover:tw-bg-blue-600'>Increment</Button>
            <Button onClick={decrement} className='tw-bg-red-500 hover:tw-bg-red-600'>Decrement</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function About() {
  return (
    <div className='tw-flex tw-justify-center tw-items-center tw-min-h-screen tw-bg-gradient-to-r tw-from-blue-50 tw-to-purple-50'>
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

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-r from-blue-50 to-purple-50'>
        <NavigationMenu className='tw-p-4 tw-border-b'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to='/' className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to='/about' className='tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-900 tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-gray-100'>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;