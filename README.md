## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disable next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# deployment for convex
CONVEX_DEPLOYMENT=dev:convex-app-name # team: <your-team-name>, project: <your-project-name>

# convex deployment url
NEXT_PUBLIC_CONVEX_URL=https://convex-app-name.convex.cloud

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# liveblocks api keys
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=sk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

### 5. Convex Deployment Configuration:

#### a. Visit the Convex Website:

- Go to the [Convex website](https://convex.cloud/) and sign in to your account.

#### b. Access Deployment Settings:

- Navigate to the deployment settings section in your Convex account.

#### c. Retrieve Deployment Configuration:

- Find the deployment details, including team and project names.
- Update the `CONVEX_DEPLOYMENT` variable in the `.env.local` file with the obtained information.

### 6. Clerk Authentication Keys:

#### a. Visit the Clerk Website:

- Go to the [Clerk website](https://clerk.dev/) and sign in to your Clerk account.

#### b. Access API Keys:

- Find the section in your Clerk account related to API keys or authentication settings.

#### c. Generate Keys:

- Generate a pair of keys (Publishable Key and Secret Key).

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables in the `.env.local` file with the keys obtained from Clerk.

### 7. Liveblocks API Keys:

#### a. Visit the Liveblocks Website:

- Go to the [Liveblocks website](https://liveblocks.io/) and sign in to your Liveblocks account.

#### b. Access API Keys:

- Navigate to your Liveblocks account settings or API keys section.

#### c. Generate Keys:

- Generate a pair of keys (Public Key and Secret Key) for development.

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` and `NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY` variables in the `.env.local` file with the Liveblocks API keys obtained.

### 8. Save and Secure:

- Save the changes to the `.env.local` file.

9. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.
10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

