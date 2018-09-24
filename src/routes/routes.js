import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import LoginLayout from '@/pages/Layout/LoginLayout.vue'

import Documents from '@/pages/Documents.vue'
import Profile from '@/pages/Profile.vue'
import Forms from '@/pages/Forms.vue'
import Request from '@/pages/Request.vue'
import Tracking from '@/pages/Tracking.vue'
import Terms from '@/pages/Terms.vue'
import Login from '@/pages/Login.vue'
import Notifications from '@/pages/Notifications.vue'
import PasswordChange from '@/pages/PasswordChange.vue'
import IngoingResearch from '@/pages/Ingoing.vue'
import OutgoingResearch from '@/pages/Outgoing.vue'
import ProgressReport from '@/pages/ProgressReport.vue'

const routes = [
  {
    path: '/',
    component: LoginLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'pwdchange',
        name: 'Change',
        component: PasswordChange
      }
    ]
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/documents',
    children: [
      {
        path: 'documents',
        name: 'Documents',
        component: Documents
      },
      {
        path: 'ingoing',
        name: 'Ingoing Research',
        component: IngoingResearch
      },
      {
        path: 'outgoing',
        name: 'Outgoing Research',
        component: OutgoingResearch
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: 'request',
        name: 'Send Requests / Forms',
        component: Request
      },
      {
        path: 'tracking',
        name: 'Tracking',
        component: Tracking
      },
      {
        path: 'progreport',
        name: 'Upload Progress Report',
        component: ProgressReport
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes
