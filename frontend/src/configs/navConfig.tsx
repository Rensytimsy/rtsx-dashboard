// Third-party Imports
import type * as Icon from 'lucide-react'


type IconName = keyof typeof Icon

export type MenuLeafSubItem = {
  label: string
  href: string
  activePath?: string
  badge?: string
  badgeClassName?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export type MenuGroupSubItem = {
  label: string
  childItems: MenuLeafSubItem[]
}

export type MenuSubItem = MenuLeafSubItem | MenuGroupSubItem

export type MenuItem = {
  icon: IconName
  label: string
} & (
  | {
      href: string
      badge?: string
      badgeClassName?: string
      childItems?: never
      target?: '_blank' | '_self' | '_parent' | '_top'
    }
  | {
      href?: never
      badge?: string
      badgeClassName?: string
      childItems: MenuSubItem[]
    }
)

export type NavItem = {
  groupLabel?: string
  items: MenuItem[]
}

export const navItems: NavItem[] = [
  {
    groupLabel: 'Dashboard & Layouts',
    items: [
      {
        icon: 'Package',
        label: 'Orders',
        href: '/dashboard/orders'
      },
      {
        icon: 'Store',
        label: 'Stores',
        href: '/dashboard/stores'
      },
      {
        icon: 'BanknoteArrowDown',
        label: 'Subscriptions',
        href: '/dashboard/subscriptions'
      },
      {
        icon: 'MonitorCog',
        label: 'System',
        href: '/dashboard/system'
      },
      {
        icon: 'CreativeCommons',
        label: 'Purchased Linceses',
        href: '/dashboard/linceses'
      },
    ]
  },
  {
    groupLabel: 'Apps',
    items: [
      {
        icon: 'MailIcon',
        label: 'Mail',
        href: '/apps/mail'
      },
      {
        icon: 'CalendarIcon',
        label: 'Calendar',
        href: '/apps/calendar'
      },
      {
        icon: 'UsersIcon',
        label: 'Users',
        childItems: [
          { label: 'List', href: '/apps/users/list' },
          { label: 'View', href: '/apps/users/view' }
        ]
      }
    ]
  },
  {
    groupLabel: 'Pages',
    items: [
      {
        icon: 'UserCogIcon',
        label: 'User Settings',
        childItems: [
          {
            label: 'General',
            href: '/pages/user-settings?setting=general'
          },
          {
            label: 'Workspace',
            href: '/pages/user-settings?setting=workspace'
          }
        ]
      },
      {
        icon: 'UserIcon',
        label: 'User Profile',
        childItems: [
          {
            label: 'Profile',
            href: '/pages/user-profile?view=profile'
          },
          {
            label: 'Connections',
            href: '/pages/user-profile?view=connections'
          }
        ]
      },
      {
        icon: 'LockKeyholeIcon',
        label: 'Authentication',
        childItems: [
          {
            label: 'Login',
            childItems: [
              { label: 'Login v1', href: '/pages/auth/login', target: '_blank' },
            
            ]
          },
          {
            label: 'Register',
            childItems: [
              { label: 'Register v1', href: '/pages/auth/register', target: '_blank' },
            ]
          },
          {
            label: 'Forgot Password',
            childItems: [
              { label: 'Forgot Password v1', href: '/pages/auth/forgot-password', target: '_blank' }
            ]
          },
          {
            label: 'Verify Email',
            childItems: [
              { label: 'Verify Email v1', href: '/pages/auth/verify-email', target: '_blank' },
            ]
          },
          {
            label: 'Reset Password',
            childItems: [
              { label: 'Reset Password v1', href: '/pages/auth/reset-password', target: '_blank' },
            ]
          },
          {
            label: 'Two Steps',
            childItems: [
              { label: 'Two Steps v1', href: '/pages/auth/two-steps', target: '_blank' },
            ]
          }
        ]
      },
      {
        icon: 'BugIcon',
        label: 'Error Pages',
        childItems: [
          { label: 'Error Page', href: '/pages/misc/error-page', target: '_blank' },
        ]
      }
    ]
  },
  {
    groupLabel: 'Forms & Tables',
    items: [
      {
        icon: 'BadgeCheckIcon',
        label: 'Form Validation',
        href: '/forms/form-validation'
      },
      {
        icon: 'TableIcon',
        label: 'Data Table',
        href: '/datatable'
      },
    ]
  }
]
