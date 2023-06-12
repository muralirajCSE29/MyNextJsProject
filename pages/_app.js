import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Container } from '@mui/material'

export default function App({ Component, pageProps }) {
  return <Layout> <Container maxWidth='md'> <Component {...pageProps} /></Container> </Layout>
}
