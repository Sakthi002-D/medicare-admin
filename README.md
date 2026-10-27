# Medicare Admin

A hospital admin panel built from a Figma design for a front-end development task. It has a full authentication flow and a three-tab dashboard with charts, tables and a notification panel.

- **Live demo:** _add your Vercel link here_
- **Design:** [Figma file](https://www.figma.com/design/TdlpNTpmtGsjVQ5d3bMKIx/Front-end-development-task?node-id=0-1&p=f)

## Features

- **Authentication screens:** Login, Sign Up, Forgot Password, Email Verification (OTP) and Reset Password, all sharing one `AuthLayout`.
- **Dashboard** with a sidebar, top bar, breadcrumb and tab navigation:
  - **Hospital Summary:** stat cards, agreement status donut, verification pending list, hospital type pie chart and revenue trend line chart.
  - **Bag Summary:** inventory cards per bag colour, order summary, collected bags trend and issued vs collected bar chart.
  - **Fleet Summary:** vehicle stats, unassigned resources, fuel prices, cost analysis, fuel usage donut and a scrollable schedule routes table.
- **Notification panel** that slides in from the right, closes with the » button or the Escape key, and lets each item be dismissed.
- Responsive layout for mobile, tablet and desktop.

## Tech stack

- React + Vite
- React Router
- Tailwind CSS v4
- Recharts
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # lint the code
```

## Routes

| Path | Page |
| --- | --- |
| `/login` | Login |
| `/signup` | Sign Up |
| `/forgot-password` | Forgot Password |
| `/verify-email` | Email Verification (OTP) |
| `/reset-password` | Reset Password |
| `/dashboard` | Hospital Summary |
| `/dashboard/bags` | Bag Summary |
| `/dashboard/fleet` | Fleet Summary |

## Project structure

```
src/
├── components/
│   ├── auth/         AuthLayout, InputField
│   └── dashboard/    Sidebar, Topbar, DashboardTabs, Card, StatCard, charts, NotificationPanel
├── data/             mock data for every dashboard tab and the notifications
├── pages/            one file per route
├── App.jsx           routes
└── index.css         Tailwind theme tokens (colours, font)
```

## Design decisions

- **Shared layouts:** every auth screen reuses `AuthLayout`, and the three dashboard tabs are nested routes inside `DashboardLayout`, so the sidebar, top bar and tabs stay mounted while switching tabs.
- **Design tokens:** colours and the font live in the Tailwind `@theme` block in `index.css` instead of being repeated across components.
- **Mock data:** all numbers and table rows are kept in `src/data`, never inside components, so they are easy to replace with an API later.
- **Small components:** cards, charts and list items are separate, reusable components.
- **Accessibility:** semantic HTML, labelled inputs and icon buttons, visible keyboard focus, and `aria-label` on the notification dialog.