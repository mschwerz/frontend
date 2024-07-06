import App from '@/App'
import ChoreEdit from '@/views/ChoreEdit/ChoreEdit'
import ChoresOverview from '@/views/ChoresOverview'
import Error from '@/views/Error'
import Settings from '@/views/Settings/Settings'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ForgotPasswordView from '../views/Authorization/ForgotPasswordView'
import LoginView from '../views/Authorization/LoginView'
import SignupView from '../views/Authorization/Signup'
import UpdatePasswordView from '../views/Authorization/UpdatePasswordView'
import ChoreView from '../views/ChoreEdit/ChoreView'
import MyChores from '../views/Chores/MyChores'
import JoinCircleView from '../views/Circles/JoinCircle'
import ChoreHistory from '../views/History/ChoreHistory'
import Landing from '../views/Landing/Landing'
import PaymentCancelledView from '../views/Payments/PaymentFailView'
import PaymentSuccessView from '../views/Payments/PaymentSuccessView'
import PrivacyPolicyView from '../views/PrivacyPolicy/PrivacyPolicyView'
import TermsView from '../views/Terms/TermsView'
import TestView from '../views/TestView/Test'
import ThingsHistory from '../views/Things/ThingsHistory'
import ThingsView from '../views/Things/ThingsView'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/chores',
        element: <ChoresOverview />,
      },
      {
        path: '/chores/:choreId/edit',
        element: <ChoreEdit />,
      },
      {
        path: '/chores/:choreId',
        element: <ChoreView />,
      },
      {
        path: '/chores/create',
        element: <ChoreEdit />,
      },
      {
        path: '/chores/:choreId/history',
        element: <ChoreHistory />,
      },
      {
        path: '/my/chores',
        element: <MyChores />,
      },
      {
        path: '/login',
        element: <LoginView />,
      },
      {
        path: '/signup',
        element: <SignupView />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: '/test',
        element: <TestView />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordView />,
      },
      {
        path: '/password/update',
        element: <UpdatePasswordView />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicyView />,
      },
      {
        path: '/terms',
        element: <TermsView />,
      },
      {
        path: 'circle/join',
        element: <JoinCircleView />,
      },
      {
        path: 'payments/success',
        element: <PaymentSuccessView />,
      },
      {
        path: 'payments/cancel',
        element: <PaymentCancelledView />,
      },
      {
        path: 'things',
        element: <ThingsView />,
      },
      {
        path: 'things/:id',
        element: <ThingsHistory />,
      },
    ],
  },
])

const RouterContext = ({ children }) => {
  return <RouterProvider router={Router} />
}

export default RouterContext
