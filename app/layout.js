import { Inter } from 'next/font/google'
import './ui/globals.css'
import { AuthProvider } from '@/app/context/AuthContext' 

const inter = Inter({ subsets: ['latin'] })
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export const metadata = {
  title: 'DKV Control Candidatos',
  description: 'DKV Control Candidatos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
